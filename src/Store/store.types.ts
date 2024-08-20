import { CommentProps, NewsProps } from '../Types/interface';

export interface LoadingAndErrorState {
  loading: boolean;
  error: string | null;
}

export interface NewsState extends LoadingAndErrorState {
  news: NewsProps[];
  URLs: string[];
  fetchAllNews: (load: boolean) => Promise<void>;
}

export interface NewsDetailState extends LoadingAndErrorState {
  newsDetail: NewsProps | null;
  comments: CommentProps[];
  fetchNewsDetail: (id: number, load: boolean) => Promise<void>;
}
