import type { Cart } from '@/types';

const CART_KEY = 'ecommerce_cart';

export const cartService = {
  // Get cart from localStorage
  getCart: (): Cart => {
    const cartData = localStorage.getItem(CART_KEY);
    if (!cartData) {
      return {
        items: [],
        totalAmount: 0,
        totalItems: 0,
      };
    }
    return JSON.parse(cartData);
  },

  // Save cart to localStorage
  saveCart: (cart: Cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  },

  // Add item to cart
  addItem: (productId: string, quantity: number = 1): Cart => {
    const cart = cartService.getCart();
    const existingItem = cart.items.find((item) => item.productId === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    cart.totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    cartService.saveCart(cart);
    return cart;
  },

  // Remove item from cart
  removeItem: (productId: string): Cart => {
    const cart = cartService.getCart();
    cart.items = cart.items.filter((item) => item.productId !== productId);
    cart.totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    cartService.saveCart(cart);
    return cart;
  },

  // Update item quantity
  updateQuantity: (productId: string, quantity: number): Cart => {
    const cart = cartService.getCart();
    const item = cart.items.find((item) => item.productId === productId);

    if (item) {
      if (quantity <= 0) {
        return cartService.removeItem(productId);
      }
      item.quantity = quantity;
      cart.totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
      cartService.saveCart(cart);
    }

    return cart;
  },

  // Clear cart
  clearCart: (): Cart => {
    const emptyCart: Cart = {
      items: [],
      totalAmount: 0,
      totalItems: 0,
    };
    cartService.saveCart(emptyCart);
    return emptyCart;
  },
};
