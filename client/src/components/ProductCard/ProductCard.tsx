import { useState } from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string, quantity: number) => void;
  isLoading?: boolean;
}

export const ProductCard = ({
  product,
  onAddToCart,
  isLoading = false,
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [showAddedNotification, setShowAddedNotification] = useState(false);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product.id, quantity);
      setShowAddedNotification(true);
      setTimeout(() => setShowAddedNotification(false), 2000);
      setQuantity(1);
    }
  };

  return (
    <motion.div
      className="relative w-full bg-white rounded-lg shadow-md border border-border overflow-hidden hover:shadow-lg transition-shadow"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Image Container */}
      <div className="relative w-full h-64 bg-muted overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Stock Badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-500 text-white rounded-full">
            In Stock
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5">
        {/* Category */}
        <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-2">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="text-lg font-bold text-foreground mb-2 truncate">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating!)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-muted'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-2">
              ({product.reviews || 0} reviews)
            </span>
          </div>
        )}

        {/* Price */}
        <div className="mb-4 border-t border-border pt-3">
          <p className="text-3xl font-bold text-primary">
            ₹{product.price.toLocaleString('en-IN')}
          </p>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-2 border border-border rounded-md hover:bg-muted transition-colors"
            disabled={quantity <= 1 || isLoading}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))
            }
            className="w-12 text-center border border-border rounded-md"
            min="1"
            max="10"
          />
          <button
            onClick={() => setQuantity(Math.min(10, quantity + 1))}
            className="px-3 py-2 border border-border rounded-md hover:bg-muted transition-colors"
            disabled={quantity >= 10 || isLoading}
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          onClick={handleAddToCart}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ShoppingCart className="w-5 h-5" />
          {isLoading ? 'Adding...' : 'Add to Cart'}
        </motion.button>

        {/* Added Notification */}
        {showAddedNotification && (
          <motion.div
            className="mt-3 p-2 bg-green-100 text-green-800 rounded-md text-sm text-center font-semibold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            ✓ Added to cart!
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
