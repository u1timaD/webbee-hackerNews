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

import { useEffect, useState } from 'react';
import useStore from '../../zustand/store';
import { useParams } from 'react-router-dom';
import { timeFormated } from '../../utils/timeFormated';
import CommentsItem from '../../components/CommentsItem/CommentsItem';

const NewsDetail = () => {
  const { id } = useParams();
  const { newsDetail, comments, fetchNewsDetail, loading, error } = useStore();


  console.log(newsDetail);
  useEffect(() => {
    fetchNewsDetail(id);
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
              <NewsLink variant="contained" href={newsDetail?.url} target="_blank">
                Link to news
              </NewsLink>
            </NewTitleWrapper>
            <NewsInfo>
              <NewsAuthor>{newsDetail?.user ?? 'гость'}</NewsAuthor>
              <NewsDate>{timeFormated(newsDetail?.time)}</NewsDate>
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
              newsDetail &&
              comments.map((item, index) => (
                <CommentsItem key={item.id} index={index} {...item}/>
              ))
            )}
          </CommentsBlock>
        </NewsDetailWrapper>
      </NewsDetailSection>
    </>
  );
};

export default NewsDetail;
