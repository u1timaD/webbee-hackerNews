import { FeedItem } from '../../Types/interface';
import { formatTime } from '../../utils/utils';
import { NewsAuthor, NewsDate, NewsInfo, NewsItem, NewsLink, NewsRating, NewsTitle } from './HomeNews.styled';

const HomeNews = ({ id, title, time, user, points }: FeedItem) => {
  return (
    <NewsItem>
      <NewsLink to={`/news/${id}`}>
        <NewsTitle variant="h2">{title}</NewsTitle>
        <NewsInfo>
          <NewsRating>{points ?? 0}</NewsRating>
          <NewsAuthor>{user ?? 'гость'}</NewsAuthor>
          <NewsDate>{formatTime(time)}</NewsDate>
        </NewsInfo>
      </NewsLink>
    </NewsItem>
  );
};

export default HomeNews;
