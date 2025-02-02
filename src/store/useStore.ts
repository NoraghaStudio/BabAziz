import { create } from 'zustand';
import { CartItem, MenuItem } from '../types';

interface StoreState {
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  total: 0,
  addToCart: (item: MenuItem) =>
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
          total: state.total + item.price,
        };
      }
      return {
        cart: [...state.cart, { ...item, quantity: 1 }],
        total: state.total + item.price,
      };
    }),
  removeFromCart: (itemId: string) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== itemId),
      total: state.cart.reduce(
        (total, item) =>
          item.id === itemId ? total : total + item.price * item.quantity,
        0
      ),
    })),
  updateQuantity: (itemId: string, quantity: number) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      ),
      total: state.cart.reduce((total, item) => {
        if (item.id === itemId) {
          return total - item.price * item.quantity + item.price * quantity;
        }
        return total + item.price * item.quantity;
      }, 0),
    })),
  clearCart: () => set({ cart: [], total: 0 }),
}));