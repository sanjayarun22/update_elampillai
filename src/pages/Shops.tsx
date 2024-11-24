import React from 'react';
import { Star, Phone, MapPin } from 'lucide-react';
import { useShopStore } from '../store/shopStore';

export default function Shops() {
  const shops = useShopStore((state) => state.shops);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shops in Elampillai</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shops.map((shop) => (
            <div key={shop.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={shop.image} 
                alt={shop.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold">{shop.name}</h2>
                  <span className="flex items-center text-yellow-500">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="ml-1">{shop.rating}</span>
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{shop.category}</p>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {shop.address}
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Phone className="w-4 h-4 mr-1" />
                  {shop.phone}
                </div>
                <p className="text-gray-700 text-sm">{shop.description}</p>
                <div className="mt-3 text-sm text-gray-500">
                  {shop.reviews} reviews
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}