import { create } from 'zustand';
import axios from 'axios';
import { FeedItem, Item } from '../Types/interface';

interface LoadingAndErrorProps {
  loading: boolean;
  error: string | null;
}

interface NewsStoreProps extends LoadingAndErrorProps {
  news: FeedItem[];
  fetchNews: () => Promise<void>;
}

interface NewsDetailStoreProps extends LoadingAndErrorProps {
  newsDetail: FeedItem | null;
  comments: Item[];
  fetchNewsDetail: (id: number) => Promise<void>;
}

interface HomePagesProps {
  homePages: boolean;
  homePagesChecked: (state: boolean) => void;
}

export const useNewsStore = create<NewsStoreProps>((set) => ({
  news: [],
  loading: false,
  error: null,

  fetchNews: async () => {
    set({ loading: true });
    try {
      const response = await axios.get('https://api.hnpwa.com/v0/news/1.json');
      set({ news: response.data, loading: false });
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

export const usePagesStore = create<HomePagesProps>((set) => ({
  homePages: false,

  homePagesChecked: (state) => {
    set({ homePages: state });
  },
}));
