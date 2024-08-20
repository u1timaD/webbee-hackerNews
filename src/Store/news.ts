import { create } from 'zustand';
import axios from 'axios';
import { sortNewsByTime } from '../utils/newsUtils';
import { NewsState } from './store.types';
import equal from 'fast-deep-equal';
import { NEWS_URL } from '../utils/constants';

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
  URLs: NEWS_URL,

  fetchAllNews: async (showLoader) => {
    if (showLoader) {
      set({ loading: true, error: null });
    }

    try {
      const { URLs, news } = get();
      const newsResponses = await Promise.all(URLs.map(fetchData));
      const allNews = sortNewsByTime(newsResponses.flat()).slice(0, 100);

      if (!equal(news, allNews)) {
        set({ news: allNews });
      }
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Unknown error' });
    } finally {
      if (showLoader) set({ loading: false });
    }
  },
}));
