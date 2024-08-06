import { create } from 'zustand';
import axios from 'axios';
import { NewsDetailState } from './store.types';
import isEqual from 'lodash.isequal';

export const useNewsDetailStore = create<NewsDetailState>((set, get) => ({
  newsDetail: null,
  comments: [],
  loading: false,
  error: null,
  commentsId: null,

  fetchNewsDetail: async (id, load) => {
    if (load) {
      set({ loading: true, error: null });
    }

    try {
      const { newsDetail } = get();
      const response = await axios.get(`https://api.hnpwa.com/v0/item/${id}.json`);

      if (load) {
        set({ newsDetail: response.data, comments: response.data.comments, loading: false });
      }
      if (!isEqual(newsDetail, response.data)) {
        set({ loading: true });
        set({ newsDetail: response.data, comments: response.data.comments, loading: false });
      }
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Unknown error', loading: false });
    }
  },
}));
