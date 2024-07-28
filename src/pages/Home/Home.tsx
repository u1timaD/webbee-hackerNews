import { NewsList, NewsSection } from './Home.styled';
import { useEffect } from 'react';
import { useNewsStore } from '../../zustand/store';
import { PAGE_UPDATE_TIME } from '../../utils/constants';
import Loading from '../../components/Loading/Loading';
import News from '../../components/News/News';

const Home = () => {
  const { news, loading, error, fetchAllNews } = useNewsStore();

  useEffect(() => {
    fetchAllNews();
    const interval = setInterval(() => {
      fetchAllNews();
    }, PAGE_UPDATE_TIME);

    return () => clearInterval(interval);
  }, [fetchAllNews]);

  useEffect(() => {
    fetchAllNews();
  }, []);

  if (error) return <div>Повторите запрос позже</div>;

  return (
    <NewsSection component="section">
      <NewsList>{loading ? <Loading count={10} /> : news.map((item) => <News key={item.id} {...item} />)}</NewsList>
    </NewsSection>
  );
};

export default Home;
