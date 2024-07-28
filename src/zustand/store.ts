import { create } from 'zustand';
import axios from 'axios';
import { FeedItem, Item } from '../Types/interface';
import { sortNewsByTime } from '../utils/utils';

interface LoadingAndErrorProps {
  loading: boolean;
  error: string | null;
}

interface NewsStoreProps extends LoadingAndErrorProps {
  news: FeedItem[];
  URLs: string[];
  fetchAllNews: () => void;
}

interface NewsDetailStoreProps extends LoadingAndErrorProps {
  newsDetail: FeedItem | null;
  comments: Item[];
  fetchNewsDetail: (id: number) => Promise<void>;
}

const fetchNews = async (URL: string) => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data from ${URL}`);
  }
};

export const useNewsStore = create<NewsStoreProps>((set, get) => ({
  news: [],
  loading: false,
  error: null,
  URLs: [
    'https://api.hnpwa.com/v0/news/1.json',
    'https://api.hnpwa.com/v0/news/2.json',
    'https://api.hnpwa.com/v0/news/3.json',
    'https://api.hnpwa.com/v0/news/4.json',
    'https://api.hnpwa.com/v0/news/5.json',
    'https://api.hnpwa.com/v0/news/6.json',
    'https://api.hnpwa.com/v0/news/7.json',
    'https://api.hnpwa.com/v0/news/8.json',
    'https://api.hnpwa.com/v0/news/9.json',
    'https://api.hnpwa.com/v0/news/10.json',
  ],

  fetchAllNews: async () => {
    set({ loading: true, error: null });
    try {
      const { URLs } = get();
      const newsResponses = await Promise.all(URLs.map(fetchNews));
      const allNews = sortNewsByTime(newsResponses.flat()).slice(0, 100);

      set({ news: allNews, loading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Unknown error', loading: false });
    }
  },
}));

export const useNewsDetailStore = create<NewsDetailStoreProps>((set) => ({
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
