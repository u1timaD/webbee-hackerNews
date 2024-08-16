import { useState } from 'react';
import { Typography, Collapse } from '@mui/material';

import {
  StyledCommentsBlock,
  StyledCommentsItem,
  StyledCommentsWrapper,
  StyledToggleComments,
} from '../Comments/Comments.styled.ts';
import { CommentsCountBlock } from '../Comments/Comments.styled';
import CommentIcon from '@mui/icons-material/Comment';
import { CommentComponentProps } from '../Comments/Comments.types';
import CommentsList from '../Comments/CommentsList.tsx';

const CommentItem = ({ comment }: CommentComponentProps) => {
  const [open, setOpen] = useState(false);

  const isCommentRemoved = comment.deleted || comment.dead;

  return (
    <StyledCommentsItem>
      <StyledCommentsWrapper key={comment.id}>
        <StyledCommentsBlock>
          <CommentsCountBlock>
            <Typography>{comment.comments_count}</Typography>
            <CommentIcon />
          </CommentsCountBlock>
          <Typography
            dangerouslySetInnerHTML={{ __html: isCommentRemoved ? 'комментарий удален' : comment.content }}
          ></Typography>
          {!!comment.comments_count && (
            <StyledToggleComments onClick={() => setOpen((prev) => !prev)}>
              {open ? 'Скрыть' : 'Показать'} комментарии
            </StyledToggleComments>
          )}
        </StyledCommentsBlock>
        {comment.comments && (
          <Collapse in={open}>
            <CommentsList comments={comment.comments} />
          </Collapse>
        )}
      </StyledCommentsWrapper>
    </StyledCommentsItem>
  );
};

export default CommentItem;
