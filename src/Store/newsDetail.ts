import { create } from 'zustand';
import axios from 'axios';
import { NewsDetailState } from './store.types';

export const useNewsDetailStore = create<NewsDetailState>((set) => ({
  newsDetail: null,
  comments: [],
  loading: false,
  error: null,
  commentsId: null,

  fetchNewsDetail: async (id) => {
    set({ loading: true });
    try {
      const response = await axios.get(`https://api.hnpwa.com/v0/item/${id}.json`);
      set({ newsDetail: response.data, comments: response.data.comments, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Unknown error', loading: false });
    }
  },
}));
