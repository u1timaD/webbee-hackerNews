import CommentIcon from '@mui/icons-material/Comment';
import {
  CommentsCountBlock,
  NewsAuthor,
  NewsBlock,
  NewsDate,
  NewsInfo,
  NewsDetailWrapper,
  NewsTitle,
  NewTitleWrapper,
  NewsLink,
} from './NewsDetail.styled';

import { useEffect } from 'react';
import { useNewsDetailStore } from '../../Store/newsDetail';
import { useParams } from 'react-router-dom';
import { formatTime } from '../../utils/dateUtils';
import { NO_USER_NAME, PAGE_UPDATE_TIME } from '../../utils/constants';
import Loading from '../../components/Loading/Loading';
import { Box, Collapse, Typography } from '@mui/material';
import Comments from '../../components/Comments/Comments';

const NewsDetail = () => {
  const { id } = useParams();
  const { newsDetail, comments, fetchNewsDetail, loading, error } = useNewsDetailStore();

  useEffect(() => {
    fetchNewsDetail(Number(id), true);
    const interval = setInterval(() => {
      fetchNewsDetail(Number(id), false);
    }, PAGE_UPDATE_TIME);

    return () => clearInterval(interval);
  }, [id, fetchNewsDetail]);

  if (loading) return <Loading count={1} />;
  if (error) return <div>Error: {error}</div>;

  return (
    <Box component="section">
      <NewsDetailWrapper>
        <NewsBlock>
          <NewTitleWrapper>
            <NewsTitle variant="h2">{newsDetail?.title}</NewsTitle>

            <NewsLink variant="contained">
              <a href={newsDetail?.url} target="_blank">
                Link to news
              </a>
            </NewsLink>
          </NewTitleWrapper>
          <NewsInfo>
            <NewsAuthor>{newsDetail?.user ?? NO_USER_NAME}</NewsAuthor>
            <NewsDate>{newsDetail?.time && formatTime(newsDetail?.time)}</NewsDate>
            <NewsDate>{newsDetail?.time_ago}</NewsDate>
            <CommentsCountBlock>
              <Typography>{newsDetail?.comments_count}</Typography>
              <CommentIcon />
            </CommentsCountBlock>
          </NewsInfo>
        </NewsBlock>
        {comments && (
          <Collapse in>
            <Comments key={id} comments={comments} />
          </Collapse>
        )}
      </NewsDetailWrapper>
    </Box>
  );
};

export default NewsDetail;
