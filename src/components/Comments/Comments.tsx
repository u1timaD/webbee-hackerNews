import { useState } from 'react';
import { Typography, Collapse } from '@mui/material';
import { CommentProps } from '../../Types/interface';
import {
  StyledCommentsBlock,
  StyledCommentsItem,
  StyledCommentsWrapper,
  StyledToggleComments,
} from './Comments.styled';
import { StyledCommentsList } from './Comments.styled';
import { CommentsCountBlock } from './Comments.styled';
import CommentIcon from '@mui/icons-material/Comment';
import { CommentComponentProps, CommentsProps } from './Comments.types';

const CommentComponent = ({ comment }: CommentComponentProps) => {
  const [open, setOpen] = useState(false);

  const isCommentRemoved = comment.deleted || comment.dead;

  const renderComment = (comment: CommentProps) => (
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
      {comment.comments &&
        <Collapse in={open}>
          {comment.comments.map((child) => renderComment(child))}
        </Collapse>}
    </StyledCommentsWrapper>
  );

  return <StyledCommentsItem>{renderComment(comment)}</StyledCommentsItem>;
};

const Comments = ({ comments }: CommentsProps) => {
  return (
    <StyledCommentsList>
      {comments.map((comment) => (
        <CommentComponent key={comment.id} comment={comment} />
      ))}
    </StyledCommentsList>
  );
};

export default Comments;
