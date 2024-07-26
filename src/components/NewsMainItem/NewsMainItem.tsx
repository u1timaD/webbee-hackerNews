import {
  NewsAuthor,
  NewsDate,
  NewsInfo,
  NewsItem,
  NewsLink,
  NewsRating,
  NewsTitle,
} from './NewsMainItem.styled';

const NewsMainItem = ({id, title, time_ago, time, user, points}) => {

  const handleClick = () => {
    console.log(`Нажали на ${id}`)
  }

  return (
    <NewsItem>
      <NewsLink onClick={handleClick}>
        <NewsTitle variant="h2">{title}</NewsTitle>
        <NewsInfo>
          <NewsRating>{points}</NewsRating>
          <NewsAuthor>{user}</NewsAuthor>
          <NewsDate>{time_ago}</NewsDate>
        </NewsInfo>
      </NewsLink>
    </NewsItem>
  );
};

export default NewsMainItem;
