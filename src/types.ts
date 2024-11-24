export interface Shop {
  id: string;
  name?: string;
  nameEn?: string;
  category?: string;
  categoryEn?: string;
  address?: string;
  addressEn?: string;
  phone?: string;
  rating: number;
  reviews: number;
  description?: string;
  descriptionEn?: string;
  image?: string;
}

export interface Comment {
  id: string;
  postId: string;
  text: string;
  author: string;
  date: string;
}

export interface NewsPost {
  id: string;
  title?: string;
  titleEn?: string;
  content?: string;
  contentEn?: string;
  date: string;
  image?: string;
  category?: string;
  categoryEn?: string;
  comments: Comment[];
}

export interface AdminState {
  isAuthenticated: boolean;
  whatsappLink: string;
  language: 'ta' | 'en';
  updateWhatsappLink: (link: string) => void;
  setLanguage: (lang: 'ta' | 'en') => void;
  login: (password: string) => void;
  logout: () => void;
}