import { NewsList } from './Home.styled';
import { useEffect } from 'react';
import { useNewsStore } from '../../Store/news';
import { PAGE_UPDATE_TIME } from '../../utils/constants';
import News from '../../components/News/News';
import { Box } from '@mui/material';
import SkeletonNews from '../../components/SkeletonNews/SkeletonNews';

const Home = () => {
  const { news, loading, error, fetchAllNews } = useNewsStore();

  useEffect(() => {
    fetchAllNews(true);
    const interval = setInterval(() => {
      fetchAllNews(false);
    }, PAGE_UPDATE_TIME);

    return () => clearInterval(interval);
  }, [fetchAllNews]);

  if (error) return <div>Повторите запрос позже</div>;

  return (
    <Box component="section">
      <NewsList>
        {news.map((item) => (
          <News key={item.id} {...item} />
        ))}
        {loading && <SkeletonNews count={10} />}
      </NewsList>
    </Box>
  );
};

export default Home;
