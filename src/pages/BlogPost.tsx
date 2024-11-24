import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useNewsStore } from '../store/newsStore';
import { useAdminStore } from '../store/adminStore';
import { ArrowLeft, Trash2 } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useAdminStore();
  const { isAuthenticated } = useAdminStore();
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');

  const post = useNewsStore((state) => 
    state.posts.find(p => p.id === id)
  );
  const addComment = useNewsStore((state) => state.addComment);
  const deleteComment = useNewsStore((state) => state.deleteComment);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-600">Post not found</p>
        </div>
      </div>
    );
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && authorName.trim()) {
      addComment(post.id, newComment, authorName);
      setNewComment('');
      setAuthorName('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate('/news')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {language === 'ta' ? 'திரும்பிச் செல்' : 'Back'}
        </button>

        {post.image && (
          <img
            src={post.image}
            alt={language === 'ta' ? post.title : post.titleEn}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}

        <h1 className="text-3xl font-bold mb-2">
          {language === 'ta' ? post.title : post.titleEn}
        </h1>

        <div className="text-gray-500 mb-6">
          {new Date(post.date).toLocaleDateString()}
          {post.category && (
            <span className="ml-2">
              • {language === 'ta' ? post.category : post.categoryEn}
            </span>
          )}
        </div>

        <div className="prose max-w-none mb-8">
          <p className="whitespace-pre-wrap">
            {language === 'ta' ? post.content : post.contentEn}
          </p>
        </div>

        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">
            {language === 'ta' ? 'கருத்துகள்' : 'Comments'}
          </h2>

          <form onSubmit={handleSubmitComment} className="mb-8">
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder={language === 'ta' ? 'உங்கள் பெயர்' : 'Your Name'}
              className="w-full px-4 py-2 border rounded-lg mb-4"
              required
            />
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder={language === 'ta' ? 'உங்கள் கருத்து' : 'Your Comment'}
              className="w-full px-4 py-2 border rounded-lg mb-4"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
            >
              {language === 'ta' ? 'அனுப்பு' : 'Submit'}
            </button>
          </form>

          <div className="space-y-6">
            {post.comments.map((comment) => (
              <div key={comment.id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">{comment.author}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(comment.date).toLocaleDateString()}
                    </p>
                  </div>
                  {isAuthenticated && (
                    <button
                      onClick={() => deleteComment(post.id, comment.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <p className="mt-2">{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}