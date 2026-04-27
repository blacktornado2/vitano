// Product Types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images?: string[];
  category: string;
  stock: number;
  rating?: number;
  reviews?: number;
}

// Cart Types
export interface CartItem {
  productId: string;
  quantity: number;
  product?: Product;
}

export interface Cart {
  items: CartItem[];
  totalAmount: number;
  totalItems: number;
}

// Order Types
export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  customerName: string;
  customerEmail: string;
  address: string;
  createdAt: Date;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
