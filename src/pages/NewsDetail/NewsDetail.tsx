import CommentIcon from '@mui/icons-material/Comment';
import {
  CommentsCountBlock,
  CommentsCountText,
  NewsAuthor,
  NewsBlock,
  NewsDate,
  NewsInfo,
  NewsDetailSection,
  NewsDetailWrapper,
  NewsTitle,
  NewTitleWrapper,
  NewsLink,
} from './NewsDetail.styled';

import { useEffect } from 'react';
import { useNewsDetailStore } from '../../zustand/store';
import { useParams } from 'react-router-dom';
import { formatTime } from '../../utils/utils';
import { NO_USER_NAME, PAGE_UPDATE_TIME } from '../../utils/constants';
import Loading from '../../components/Loading/Loading';
import NestedComments from '../../components/NestedComments/NestedComments';
import { Collapse } from '@mui/material';

const NewsDetail = () => {
  const { id } = useParams();
  const { newsDetail, comments, fetchNewsDetail, loading, error } = useNewsDetailStore();

  useEffect(() => {
    fetchNewsDetail(Number(id));
    const interval = setInterval(() => {
      fetchNewsDetail(Number(id));
    }, PAGE_UPDATE_TIME);

    return () => clearInterval(interval);
  }, [id, fetchNewsDetail]);

  if (loading) return <Loading count={1} />;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <NewsDetailSection component="section">
        <NewsDetailWrapper>
          <NewsBlock>
            <NewTitleWrapper>
              <NewsTitle variant="h2">{newsDetail?.title}</NewsTitle>
              <a href={newsDetail?.url} target="_blank">
                <NewsLink variant="contained">Link to news</NewsLink>
              </a>
            </NewTitleWrapper>
            <NewsInfo>
              <NewsAuthor>{newsDetail?.user ?? NO_USER_NAME}</NewsAuthor>
              <NewsDate>{newsDetail?.time && formatTime(newsDetail?.time)}</NewsDate>
              <NewsDate>{newsDetail?.time_ago}</NewsDate>
              <CommentsCountBlock>
                <CommentsCountText>{newsDetail?.comments_count}</CommentsCountText>
                <CommentIcon />
              </CommentsCountBlock>
            </NewsInfo>
          </NewsBlock>

          <Collapse in>{comments && <NestedComments key={id} comments={comments} />}</Collapse>
        </NewsDetailWrapper>
      </NewsDetailSection>
    </>
  );
};

export default NewsDetail;
