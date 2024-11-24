import { create } from 'zustand';
import { AdminState } from '../types';

export const useAdminStore = create<AdminState>((set) => ({
  isAuthenticated: false,
  whatsappLink: 'https://chat.whatsapp.com/your-group-link',
  language: 'ta',
  login: (password: string) => {
    if (password === 'admin123') {
      set({ isAuthenticated: true });
    }
  },
  logout: () => set({ isAuthenticated: false }),
  updateWhatsappLink: (link: string) => set({ whatsappLink: link }),
  setLanguage: (lang: 'ta' | 'en') => set({ language: lang }),
}));