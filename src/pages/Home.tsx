import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Newspaper, MapPin } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <WhatsAppButton />
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1606913893920-c664aa7d36df?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="h-full flex flex-col justify-center items-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
              Welcome to இளம்பிள்ளை
            </h1>
            <p className="text-xl md:text-2xl text-center max-w-2xl">
              உங்கள் நகரத்தின் கடைகள் மற்றும் செய்திகள்
            </p>
          </div>
        </div>
      </div>

      {/* Location Info */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-start space-x-2 text-gray-600 mb-4">
            <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium">இளம்பிள்ளை, சேலம் மாவட்டம்</p>
              <p>தமிழ்நாடு 637502</p>
              <p className="text-sm mt-1">சேலம்-பெங்களூர் தேசிய நெடுஞ்சாலையில் (NH-44) சேலத்திலிருந்து 27 கி.மீ தொலைவில் அமைந்துள்ளது</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <Link to="/shops" className="transform hover:scale-105 transition-transform">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <ShoppingBag className="w-12 h-12 text-indigo-600 mb-4" />
              <h2 className="text-2xl font-bold mb-2">கடைகள்</h2>
              <p className="text-gray-600">
                இளம்பிள்ளையில் உள்ள அனைத்து கடைகளின் விவரங்களையும் காணலாம்
              </p>
            </div>
          </Link>

          <Link to="/news" className="transform hover:scale-105 transition-transform">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Newspaper className="w-12 h-12 text-indigo-600 mb-4" />
              <h2 className="text-2xl font-bold mb-2">செய்திகள்</h2>
              <p className="text-gray-600">
                நமது ஊரின் அனைத்து செய்திகளையும் அறிந்து கொள்ளலாம்
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}