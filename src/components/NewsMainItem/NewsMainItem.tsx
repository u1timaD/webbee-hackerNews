import { timeFormated } from '../../utils/timeFormated';
import {
  NewsAuthor,
  NewsDate,
  NewsInfo,
  NewsItem,
  NewsLink,
  NewsRating,
  NewsTitle,
} from './NewsMainItem.styled';

const NewsMainItem = ({id, title, time, user, points}) => {

  return (
    <NewsItem>
      <NewsLink to={`/news/${id}`}>
        <NewsTitle variant="h2">{title}</NewsTitle>
        <NewsInfo>
          <NewsRating>{points ?? 0}</NewsRating>
          <NewsAuthor>{user ?? 'гость'}</NewsAuthor>
          <NewsDate>{timeFormated(time)}</NewsDate>
        </NewsInfo>
      </NewsLink>
    </NewsItem>
  );
};

export default NewsMainItem;
