import { FeedItem } from '../../Types/interface';
import { NO_USER_NAME } from '../../utils/constants';
import { formatTime } from '../../utils/utils';
import { NewsAuthor, NewsDate, NewsInfo, NewsItem, NewsLink, NewsRating, NewsTitle } from './News.styled';

const News = ({ id, title, time, time_ago, user, points }: FeedItem) => {
  return (
    <NewsItem>
      <NewsLink to={`/news/${id}`}>
        <NewsTitle variant="h2">{title}</NewsTitle>
        <NewsInfo>
          <NewsRating>{points || 0}</NewsRating>
          <NewsAuthor>{user || NO_USER_NAME}</NewsAuthor>
          <NewsDate>{formatTime(time)}</NewsDate>
          <NewsDate>{time_ago}</NewsDate>
        </NewsInfo>
      </NewsLink>
    </NewsItem>
  );
};

export default News;
