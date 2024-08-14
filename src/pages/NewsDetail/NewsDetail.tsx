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
  NewsLinkWrapper,
} from './NewsDetail.styled';

import { useEffect } from 'react';
import { useNewsDetailStore } from '../../Store/newsDetail';
import { useNavigate, useParams } from 'react-router-dom';
import { formatTime } from '../../utils/dateUtils';
import { NO_USER_NAME, PAGE_UPDATE_TIME } from '../../utils/constants';
import { Box, Collapse, Typography } from '@mui/material';
import Comments from '../../components/Comments/Comments';
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader';

const NewsDetail = () => {
  const { id } = useParams();
  const { newsDetail, comments, fetchNewsDetail, loading, error } = useNewsDetailStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isNaN(Number(id))) {
      navigate('/404');
    }
    fetchNewsDetail(Number(id), true);
    const interval = setInterval(() => {
      fetchNewsDetail(Number(id), false);
    }, PAGE_UPDATE_TIME);

    return () => clearInterval(interval);
  }, [id, fetchNewsDetail]);

  if (error) return <div>Error: {error}</div>;

  return (
    <Box component="section">
      <NewsDetailWrapper>
        {!loading ? (
          <>
            <NewsBlock>
              <NewTitleWrapper>
                <NewsTitle variant="h3">{newsDetail?.title}</NewsTitle>
                <NewsLinkWrapper variant="contained">
                  <NewsLink href={newsDetail?.url} target="_blank">
                    Link to news
                  </NewsLink>
                </NewsLinkWrapper>
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
          </>
        ) : (
          <SkeletonLoader />
        )}
      </NewsDetailWrapper>
    </Box>
  );
};

export default NewsDetail;
