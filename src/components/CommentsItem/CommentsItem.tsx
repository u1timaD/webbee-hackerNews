import { StyledCommentsBlock, StyledCommentsItem, StyledCommentsTime, StyledCommentsUser } from './CommentsItem.styled';
import CommentIcon from '@mui/icons-material/Comment';
import CommentsList from '../NestedComments/NestedComments';
import { useState } from 'react';
import { Item } from '../../Types/interface';
import { checkDead } from '../../utils/utils';
import { Box } from '@mui/system';
import { Collapse, Typography } from '@mui/material';
import { CommentsCountBlock, CommentsCountText, StyledCollapse } from '../../pages/NewsDetail/NewsDetail.styled';

const CommentsItem = (comment: Item) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    comment.comments.length !== 0 && setOpen(!open);
  };

  const isDead = checkDead(comment);

  return (
    <StyledCommentsItem key={comment.id}>
      <StyledCommentsBlock>
        <Box display="flex">
          <StyledCommentsUser>{comment.user}</StyledCommentsUser>
          <StyledCommentsTime>{comment.time_ago}</StyledCommentsTime>
        </Box>

        <Typography
          color={isDead ? '#9c9c9c' : '#000000'}
          onClick={handleClick}
          dangerouslySetInnerHTML={{ __html: isDead ? 'комментарий удален' : comment.content }}
        />
        <CommentsCountBlock>
          <CommentsCountText>{comment.comments_count}</CommentsCountText>
          <CommentIcon />
        </CommentsCountBlock>
      </StyledCommentsBlock>

      <StyledCollapse in={open} timeout="auto" unmountOnExit>
        {comment.comments && <CommentsList key={comment.id} comments={comment.comments} />}
      </StyledCollapse>
    </StyledCommentsItem>
  );
};

export default CommentsItem;
