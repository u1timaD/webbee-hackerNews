import { NewsList, NewsSection } from './NewsMain.styled';
import NewsMainItem from '../../components/NewsMainItem/NewsMainItem';
import dataLocal from '../../utils/dataNews.json'

const NewsMain = () => {

  return (
    <NewsSection component="section">
      <NewsList>
        {dataLocal.map((item) => (
          <NewsMainItem key={item.id} {...item} />
        ))}
      </NewsList>
    </NewsSection>
  );
};

export default NewsMain;
