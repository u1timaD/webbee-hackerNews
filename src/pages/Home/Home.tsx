import { NewsList, NewsSection } from './Home.styled';
import { useEffect, useMemo } from 'react';
import { useNewsStore, usePagesStore } from '../../zustand/store';
import { sortNewsByTime } from '../../utils/utils';
import HomeNews from '../../components/HomeNews/HomeNews';

const Home = () => {
  const { news, fetchNews, loading, error } = useNewsStore();
  const { homePagesChecked } = usePagesStore();

  console.log(news);

  console.log('ререндер главной страницы');

  useEffect(() => {
    fetchNews();
    homePagesChecked(false);
  }, [fetchNews]);

  const dataNewsSorted = useMemo(() => {
    if (!news || !Array.isArray(news)) return [];
    return sortNewsByTime(news);
  }, [news]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <NewsSection component="section">
      <NewsList>
        {dataNewsSorted.map((item) => (
          <HomeNews key={item.id} {...item} />
        ))}
      </NewsList>
    </NewsSection>
  );
};

export default Home;
