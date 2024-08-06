import { create } from 'zustand';
import axios from 'axios';
import { sortNewsByTime } from '../utils/newsUtils';
import { NewsState } from './store.types';
import isEqual from 'lodash.isequal';

const fetchData = async (URL: string) => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data from ${URL}`);
  }
};

export const useNewsStore = create<NewsState>((set, get) => ({
  news: [],
  loading: false,
  error: null,
  URLs: [
    'https://api.hnpwa.com/v0/newest/1.json',
    'https://api.hnpwa.com/v0/newest/2.json',
    'https://api.hnpwa.com/v0/newest/3.json',
    'https://api.hnpwa.com/v0/newest/4.json',
  ],

  fetchAllNews: async (load) => {
    if (load) {
      set({ loading: true, error: null });
    }

    try {
      const { URLs, news } = get();
      const newsResponses = await Promise.all(URLs.map(fetchData));
      const allNews = sortNewsByTime(newsResponses.flat()).slice(0, 100);

      if (load) {
        set({ news: allNews, loading: false });
      }

      if (!isEqual(news, allNews)) {
        set({ news: [], loading: true });
        set({ news: allNews, loading: false });
      }
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Unknown error', loading: false });
    }
  },
}));
