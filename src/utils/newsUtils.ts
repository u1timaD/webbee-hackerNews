import { NewsProps } from '../Types/interface';

export const sortNewsByTime = (news: NewsProps[]) => news.toSorted((a, b) => b.time - a.time);
