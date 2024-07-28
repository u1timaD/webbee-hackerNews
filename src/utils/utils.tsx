import dayjs, { Dayjs } from 'dayjs';
import { FeedItem, Item } from '../Types/interface';

export const formatTime = (time: number): string => {
  const actualTime: Dayjs = dayjs(time * 1000);
  const day: number = actualTime.date();
  const month: number = actualTime.month() + 1;
  const monthFormatted: string = month <= 10 ? `0${month}` : month.toString();
  const year: number = actualTime.year();
  const date: string = `${day} - ${monthFormatted} - ${year}`;

  return date;
};

export const sortNewsByTime = (news: FeedItem[]) => [...news].sort((a, b) => b.time - a.time);

export const checkDead = (comment: Item) => {
  let dead = false;
  if (comment.deleted) dead = true;
  if (comment.dead) dead = true;

  return dead;
};
