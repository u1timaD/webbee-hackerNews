import { NewsList, NewsSection } from './NewsMain.styled';
import NewsMainItem from '../../components/NewsMainItem/NewsMainItem';
import { useEffect, useMemo } from 'react';
import useStore from '../../zustand/store';

const NewsMain = () => {
  const { news, fetchNews, loading, error } = useStore();

  console.log('ререндер главной страницы')

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);


  const dataNewsSorted = useMemo(() => {
    if (!news || !Array.isArray(news)) return [];
    return [...news].sort((a, b) => b.time - a.time);
  }, [news]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <NewsSection component="section">
      <NewsList>
        {dataNewsSorted.map((item) => (
          <NewsMainItem key={item.id} {...item} />
        ))}
      </NewsList>
    </NewsSection>
  );
};

export default NewsMain;
