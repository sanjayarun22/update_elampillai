import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { useNewsStore } from '../store/newsStore';
import { useAdminStore } from '../store/adminStore';

export default function News() {
  const posts = useNewsStore((state) => state.posts);
  const { language } = useAdminStore();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {language === 'ta' ? 'இளம்பிள்ளை செய்திகள்' : 'Latest News from Elampillai'}
        </h1>
        
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                {post.image && (
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full md:w-48 object-cover"
                      src={post.image}
                      alt={language === 'ta' ? post.title : post.titleEn}
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                    {post.category && (
                      <>
                        <span className="mx-2">•</span>
                        {language === 'ta' ? post.category : post.categoryEn}
                      </>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {language === 'ta' ? post.title : post.titleEn}
                  </h2>
                  <p className="text-gray-600">
                    {(language === 'ta' ? post.content : post.contentEn)?.slice(0, 150)}...
                  </p>
                  <Link
                    to={`/news/${post.id}`}
                    className="mt-4 inline-block text-indigo-600 hover:text-indigo-500"
                  >
                    {language === 'ta' ? 'மேலும் படிக்க →' : 'Read more →'}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}