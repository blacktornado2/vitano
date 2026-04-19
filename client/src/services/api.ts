import axios from 'axios';
import type { AxiosInstance } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add any auth tokens if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// Product APIs
export const productApi = {
  getAll: () => api.get('/products'),
  getById: (id: string) => api.get(`/products/${id}`),
};

// Cart APIs
export const cartApi = {
  addItem: (data: any) => api.post('/cart/add', data),
  removeItem: (productId: string) => api.post('/cart/remove', { productId }),
  getCart: () => api.get('/cart'),
};

// Order APIs
export const orderApi = {
  create: (data: any) => api.post('/orders', data),
  getById: (id: string) => api.get(`/orders/${id}`),
};

export default api;
