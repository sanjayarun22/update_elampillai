import React, { useState, useEffect } from 'react';
import { useShopStore } from '../store/shopStore';
import { Star } from 'lucide-react';

export default function ShopForm({ editShop = null, onSubmit = () => {} }) {
  const addShop = useShopStore((state) => state.addShop);
  const updateShop = useShopStore((state) => state.updateShop);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    nameEn: '',
    category: '',
    categoryEn: '',
    address: '',
    addressEn: '',
    phone: '',
    description: '',
    descriptionEn: '',
    image: '',
    rating: 0,
    reviews: 0,
  });

  useEffect(() => {
    if (editShop) {
      setFormData(editShop);
    }
  }, [editShop]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const shopData = {
      ...formData,
      id: formData.id || Date.now().toString(),
      rating: Number(formData.rating) || 0,
      reviews: Number(formData.reviews) || 0,
    };

    if (editShop) {
      updateShop(shopData);
    } else {
      addShop(shopData);
    }
    onSubmit();
  };

  const handleRatingChange = (newRating: number) => {
    setFormData({ ...formData, rating: newRating });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="கடையின் பெயர்"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Shop Name (English)"
            value={formData.nameEn}
            onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="வகை"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Category (English)"
            value={formData.categoryEn}
            onChange={(e) => setFormData({ ...formData, categoryEn: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="முகவரி"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Address (English)"
            value={formData.addressEn}
            onChange={(e) => setFormData({ ...formData, addressEn: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
      </div>

      <input
        type="tel"
        placeholder="தொலைபேசி எண் / Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full px-4 py-2 border rounded-lg"
      />

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <textarea
            placeholder="விவரங்கள்"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            rows={4}
          />
        </div>
        <div>
          <textarea
            placeholder="Description (English)"
            value={formData.descriptionEn}
            onChange={(e) => setFormData({ ...formData, descriptionEn: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            rows={4}
          />
        </div>
      </div>

      <input
        type="url"
        placeholder="படத்தின் URL / Image URL"
        value={formData.image}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        className="w-full px-4 py-2 border rounded-lg"
      />

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Rating / மதிப்பீடு
        </label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              type="button"
              onClick={() => handleRatingChange(rating)}
              className="focus:outline-none"
            >
              <Star
                className={`w-6 h-6 ${
                  rating <= formData.rating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
      >
        {editShop ? 'மாற்றம் செய் / Update' : 'சேர் / Add'}
      </button>
    </form>
  );
}