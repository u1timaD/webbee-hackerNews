import { create } from 'zustand';
import axios from 'axios';
import { NewsDetailState } from './store.types';
import equal from 'fast-deep-equal';

export const useNewsDetailStore = create<NewsDetailState>((set, get) => ({
  newsDetail: null,
  comments: [],
  loading: false,
  error: null,
  commentsId: null,

  fetchNewsDetail: async (id, showLoader) => {
    if (showLoader) {
      set({ loading: true, error: null });
    }

    try {
      const { newsDetail } = get();
      const response = await axios.get(`https://api.hnpwa.com/v0/item/${id}.json`);

      if (!equal(newsDetail, response.data)) {
        set({ newsDetail: response.data, comments: response.data.comments });
      }
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Unknown error' });
    } finally {
      if (showLoader) {
        set({ loading: false });
      }
    }
  },
}));
