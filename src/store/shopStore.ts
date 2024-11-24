import { create } from 'zustand';
import type { Shop } from '../types';

interface ShopState {
  shops: Shop[];
  addShop: (shop: Omit<Shop, 'id'>) => void;
  updateShop: (shop: Shop) => void;
  deleteShop: (id: string) => void;
}

export const useShopStore = create<ShopState>((set) => ({
  shops: [],
  addShop: (newShop) => 
    set((state) => ({
      shops: [...state.shops, { ...newShop, id: Date.now().toString() }]
    })),
  updateShop: (updatedShop) =>
    set((state) => ({
      shops: state.shops.map(shop => 
        shop.id === updatedShop.id ? updatedShop : shop
      )
    })),
  deleteShop: (id) =>
    set((state) => ({
      shops: state.shops.filter(shop => shop.id !== id)
    })),
}));