import { useState, useEffect, useCallback } from 'react';
import type { Cart } from '@/types';
import { cartService } from '@services/cartService';

export const useCart = () => {
  const [cart, setCart] = useState<Cart>(cartService.getCart());
  const [isLoading, setIsLoading] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = cartService.getCart();
    setCart(savedCart);
  }, []);

  const addToCart = useCallback((productId: string, quantity: number = 1) => {
    setIsLoading(true);
    try {
      const updatedCart = cartService.addItem(productId, quantity);
      setCart(updatedCart);
      return { success: true, message: 'Added to cart' };
    } catch (error) {
      console.error('Error adding to cart:', error);
      return { success: false, message: 'Failed to add to cart' };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setIsLoading(true);
    try {
      const updatedCart = cartService.removeItem(productId);
      setCart(updatedCart);
      return { success: true, message: 'Removed from cart' };
    } catch (error) {
      console.error('Error removing from cart:', error);
      return { success: false, message: 'Failed to remove from cart' };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setIsLoading(true);
    try {
      const updatedCart = cartService.updateQuantity(productId, quantity);
      setCart(updatedCart);
      return { success: true, message: 'Quantity updated' };
    } catch (error) {
      console.error('Error updating quantity:', error);
      return { success: false, message: 'Failed to update quantity' };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearCart = useCallback(() => {
    setIsLoading(true);
    try {
      const emptyCart = cartService.clearCart();
      setCart(emptyCart);
      return { success: true, message: 'Cart cleared' };
    } catch (error) {
      console.error('Error clearing cart:', error);
      return { success: false, message: 'Failed to clear cart' };
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    cart,
    isLoading,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
};
