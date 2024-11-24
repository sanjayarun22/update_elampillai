import React from 'react';
import { useAdminStore } from '../store/adminStore';

export default function LanguageToggle() {
  const { language, setLanguage } = useAdminStore();

  return (
    <button
      onClick={() => setLanguage(language === 'ta' ? 'en' : 'ta')}
      className="fixed bottom-4 left-4 z-50 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
    >
      {language === 'ta' ? 'English' : 'தமிழ்'}
    </button>
  );
}