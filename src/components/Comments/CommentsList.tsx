import { StyledCommentsList } from './Comments.styled';
import { CommentsProps } from './Comments.types';
import CommentItem from '../CommentItem/CommentItem';

const CommentsList = ({ comments }: CommentsProps) => {
  return (
    <StyledCommentsList>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </StyledCommentsList>
  );
};

export default CommentsList;
