import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
  news: [],
  newsDetail: null,
  comments: [],
  loading: false,
  error: null,

  fetchNews: async () => {
    set({ loading: true });
    try {
      const response = await axios.get('https://api.hnpwa.com/v0/news/1.json');
      set({ news: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchNewsDetail: async (id) => {
    set({ loading: true });
    try {
      const response = await axios.get(`https://api.hnpwa.com/v0/item/${id}.json`);
      set({ newsDetail: response.data, comments: response.data.comments, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useStore;
