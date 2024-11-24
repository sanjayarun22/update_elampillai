import { create } from 'zustand';
import type { NewsPost, Comment } from '../types';

interface NewsState {
  posts: NewsPost[];
  addPost: (post: Omit<NewsPost, 'id' | 'date' | 'comments'>) => void;
  updatePost: (post: NewsPost) => void;
  deletePost: (id: string) => void;
  addComment: (postId: string, text: string, author: string) => void;
  deleteComment: (postId: string, commentId: string) => void;
}

export const useNewsStore = create<NewsState>((set) => ({
  posts: [],
  addPost: (newPost) =>
    set((state) => ({
      posts: [
        {
          ...newPost,
          id: Date.now().toString(),
          date: new Date().toISOString(),
          comments: [],
        },
        ...state.posts,
      ],
    })),
  updatePost: (updatedPost) =>
    set((state) => ({
      posts: state.posts.map(post =>
        post.id === updatedPost.id ? updatedPost : post
      ),
    })),
  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter(post => post.id !== id),
    })),
  addComment: (postId, text, author) =>
    set((state) => ({
      posts: state.posts.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: Date.now().toString(),
                  postId,
                  text,
                  author,
                  date: new Date().toISOString(),
                },
              ],
            }
          : post
      ),
    })),
  deleteComment: (postId, commentId) =>
    set((state) => ({
      posts: state.posts.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.filter(comment => comment.id !== commentId),
            }
          : post
      ),
    })),
}));