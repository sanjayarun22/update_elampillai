import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useAdminStore } from '../store/adminStore';

export default function WhatsAppButton() {
  const whatsappLink = useAdminStore((state) => state.whatsappLink);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Join WhatsApp Community"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}