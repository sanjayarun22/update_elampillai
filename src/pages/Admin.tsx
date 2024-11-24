import React, { useState } from 'react';
import { useAdminStore } from '../store/adminStore';
import { useShopStore } from '../store/shopStore';
import { useNewsStore } from '../store/newsStore';
import ShopForm from '../components/ShopForm';
import NewsForm from '../components/NewsForm';
import { Trash2, Edit2 } from 'lucide-react';

export default function Admin() {
  const { isAuthenticated, login, logout, whatsappLink, updateWhatsappLink } = useAdminStore();
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'shops' | 'news'>('shops');
  const [editingShop, setEditingShop] = useState(null);
  const [editingNews, setEditingNews] = useState(null);
  const [newWhatsappLink, setNewWhatsappLink] = useState(whatsappLink);
  
  const shops = useShopStore((state) => state.shops);
  const deleteShop = useShopStore((state) => state.deleteShop);
  const posts = useNewsStore((state) => state.posts);
  const deletePost = useNewsStore((state) => state.deletePost);

  const handleWhatsappUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    updateWhatsappLink(newWhatsappLink);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            login(password);
          }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-2 border rounded-lg mb-4"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">WhatsApp Community Link</h2>
          <form onSubmit={handleWhatsappUpdate} className="flex gap-4">
            <input
              type="url"
              value={newWhatsappLink}
              onChange={(e) => setNewWhatsappLink(e.target.value)}
              placeholder="WhatsApp Group Link"
              className="flex-1 px-4 py-2 border rounded-lg"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Update Link
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex space-x-4 mb-6">
            <button
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'shops'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveTab('shops')}
            >
              Manage Shops
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'news'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveTab('news')}
            >
              Manage News
            </button>
          </div>

          {activeTab === 'shops' ? (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  {editingShop ? 'Edit Shop' : 'Add New Shop'}
                </h2>
                <ShopForm
                  editShop={editingShop}
                  onSubmit={() => setEditingShop(null)}
                />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Existing Shops</h2>
                <div className="space-y-4">
                  {shops.map((shop) => (
                    <div key={shop.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                      <div>
                        <h3 className="font-semibold">{shop.name}</h3>
                        <p className="text-sm text-gray-600">{shop.nameEn}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setEditingShop(shop)}
                          className="text-indigo-600 hover:text-indigo-700"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => deleteShop(shop.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  {editingNews ? 'Edit News Post' : 'Add News Post'}
                </h2>
                <NewsForm
                  editPost={editingNews}
                  onSubmit={() => setEditingNews(null)}
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Existing Posts</h2>
                <div className="space-y-4">
                  {posts.map((post) => (
                    <div key={post.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                      <div>
                        <h3 className="font-semibold">{post.title}</h3>
                        <p className="text-sm text-gray-600">{post.titleEn}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(post.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setEditingNews(post)}
                          className="text-indigo-600 hover:text-indigo-700"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => deletePost(post.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}