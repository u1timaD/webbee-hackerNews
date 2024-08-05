import { StyledCommentsBlock, StyledCommentsItem, StyledCommentsTime, StyledCommentsUser } from './CommentsItem.styled';
import CommentIcon from '@mui/icons-material/Comment';
import CommentsList from '../NestedComments/NestedComments';
import { useState } from 'react';
import { CommentProps } from '../../Types/interface';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { CommentsCountBlock, StyledCollapse } from '../../pages/NewsDetail/NewsDetail.styled';

const CommentsItem = (comment: CommentProps) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prevOpen) => {
      return comment.comments.length !== 0 ? !prevOpen : prevOpen;
    });
  };

  const isCommentRemoved = comment.deleted || comment.dead;

  return (
    <StyledCommentsItem key={comment.id}>
      <StyledCommentsBlock>
        <Box display="flex">
          <StyledCommentsUser>{comment.user}</StyledCommentsUser>
          <StyledCommentsTime>{comment.time_ago}</StyledCommentsTime>
        </Box>

        <Typography
          color={isCommentRemoved ? '#9c9c9c' : '#000000'}
          onClick={handleClick}
          dangerouslySetInnerHTML={{ __html: isCommentRemoved ? 'комментарий удален' : comment.content }}
        />
        <CommentsCountBlock>
          <Typography>{comment.comments_count}</Typography>
          <CommentIcon />
        </CommentsCountBlock>
      </StyledCommentsBlock>

      <StyledCollapse in={open} timeout="auto">
        {comment.comments && <CommentsList key={comment.id} comments={comment.comments} />}
      </StyledCollapse>
    </StyledCommentsItem>
  );
};

export default CommentsItem;
