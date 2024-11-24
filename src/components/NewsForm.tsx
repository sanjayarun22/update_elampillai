import React, { useState } from 'react';
import { useNewsStore } from '../store/newsStore';

export default function NewsForm() {
  const addPost = useNewsStore((state) => state.addPost);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    image: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPost(formData);
    setFormData({
      title: '',
      content: '',
      category: '',
      image: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="News Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="w-full px-4 py-2 border rounded-lg"
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        className="w-full px-4 py-2 border rounded-lg"
        required
      />
      <input
        type="url"
        placeholder="Image URL"
        value={formData.image}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        className="w-full px-4 py-2 border rounded-lg"
        required
      />
      <textarea
        placeholder="Content"
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        className="w-full px-4 py-2 border rounded-lg"
        rows={6}
        required
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
      >
        Add News Post
      </button>
    </form>
  );
}