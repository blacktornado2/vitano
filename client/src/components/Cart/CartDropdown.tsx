import { X, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Cart as CartType } from '@/types';

interface CartDropdownProps {
  cart: CartType;
  isOpen: boolean;
  onClose: () => void;
  onRemoveItem?: (productId: string) => void;
  onUpdateQuantity?: (productId: string, quantity: number) => void;
  onCheckout?: () => void;
}

export const CartDropdown = ({
  cart,
  isOpen,
  onClose,
  onRemoveItem,
  onUpdateQuantity,
  onCheckout,
}: CartDropdownProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Cart Panel */}
      <motion.div
        className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border shadow-lg z-50 flex flex-col"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.items.length === 0 ? (
            <div className="h-full flex items-center justify-center text-center">
              <div>
                <p className="text-muted-foreground mb-2">Your cart is empty</p>
                <p className="text-sm text-muted-foreground">
                  Add some products to get started!
                </p>
              </div>
            </div>
          ) : (
            cart.items.map((item) => (
              <motion.div
                key={item.productId}
                className="flex gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                layout
              >
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{item.productId}</p>
                  <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      onUpdateQuantity?.(
                        item.productId,
                        Math.max(1, item.quantity - 1)
                      )
                    }
                    className="px-2 py-1 border border-border rounded hover:bg-muted transition-colors text-sm"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() =>
                      onUpdateQuantity?.(
                        item.productId,
                        Math.min(10, item.quantity + 1)
                      )
                    }
                    className="px-2 py-1 border border-border rounded hover:bg-muted transition-colors text-sm"
                  >
                    +
                  </button>

                  <button
                    onClick={() => onRemoveItem?.(item.productId)}
                    className="ml-2 p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.items.length > 0 && (
          <>
            <div className="border-t border-border p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-foreground font-semibold">Total Items:</span>
                <span className="text-foreground font-bold">{cart.totalItems}</span>
              </div>

              <motion.button
                onClick={onCheckout}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Proceed to Checkout
              </motion.button>

              <button
                onClick={onClose}
                className="w-full border border-border text-foreground py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </motion.div>
    </>
  );
};
