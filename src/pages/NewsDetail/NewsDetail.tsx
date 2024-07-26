import CommentIcon from '@mui/icons-material/Comment';
import {
  CommentsBlock,
  CommentsCountBlock,
  CommentsCountText,
  NewsAuthor,
  NewsBlock,
  NewsDate,
  NewsInfo,
  NewsLink,
  NewsDetailSection,
  NewsDetailWrapper,
  NewsTitle,
  NewTitleWrapper,
} from './NewsDetail.styled';

import { useEffect } from 'react';
import { usePagesStore, useNewsDetailStore } from '../../zustand/store';
import { useParams } from 'react-router-dom';
import { formatTime } from '../../utils/utils';
import CommentsItem from '../../components/CommentsItem/CommentsItem';

const NewsDetail = () => {
  const { id } = useParams();
  const { newsDetail, comments, fetchNewsDetail, loading, error } = useNewsDetailStore();
  const { homePagesChecked } = usePagesStore();

  console.log(newsDetail);
  useEffect(() => {
    fetchNewsDetail(Number(id));
    homePagesChecked(true);
  }, [id, fetchNewsDetail]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <NewsDetailSection component="section">
        <NewsDetailWrapper>
          <NewsBlock>
            <NewTitleWrapper>
              <NewsTitle variant="h2">{newsDetail?.title}</NewsTitle>
              {/* <NewsLink variant="contained" href={newsDetail?.url} target="_blank"> */}
              <NewsLink variant="contained" href={newsDetail?.url} >
                Link to news
              </NewsLink>
            </NewTitleWrapper>
            <NewsInfo>
              <NewsAuthor>{newsDetail?.user ?? 'гость'}</NewsAuthor>
              <NewsDate>{formatTime(newsDetail?.time)}</NewsDate>
              <CommentsCountBlock>
                <CommentsCountText>{newsDetail?.comments_count}</CommentsCountText>
                <CommentIcon />
              </CommentsCountBlock>
            </NewsInfo>
          </NewsBlock>
          <CommentsBlock>
            {comments.length === 0 ? (
              <div>Пока никто не оставил комментов</div>
            ) : (
              newsDetail && comments.map((item) => <CommentsItem key={item.id} {...item} />)
            )}
          </CommentsBlock>
        </NewsDetailWrapper>
      </NewsDetailSection>
    </>
  );
};

export default NewsDetail;
