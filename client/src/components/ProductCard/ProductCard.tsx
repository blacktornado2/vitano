import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({
  product,
}: ProductCardProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = product.images?.length ? product.images : [product.image];

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      className="relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Image Container */}
      <div className="relative w-full h-96 bg-muted overflow-hidden">
        <motion.img
          key={activeImageIndex}
          src={images[activeImageIndex]}
          alt={product.name}
          className="w-full h-full object-contain p-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        
        {/* Image Thumbnails */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx === activeImageIndex
                    ? 'bg-primary'
                    : 'bg-white/60 hover:bg-white/90'
                }`}
              />
            ))}
          </div>
        )}

        {/* Stock Badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-500 text-white rounded-full">
            In Stock
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Category */}
        <p className="text-sm uppercase tracking-wide text-muted-foreground font-semibold mb-2">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="text-xl font-bold text-foreground mb-3">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-base text-muted-foreground mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
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
        <div className="border-t border-border pt-3">
          <p className="text-3xl font-bold text-primary">
            ₹{product.price.toLocaleString('en-IN')}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
