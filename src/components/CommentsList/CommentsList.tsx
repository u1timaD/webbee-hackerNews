import { Item } from '../../Types/interface';
import { StyledCommentIndex, StyledCommentsItem, StyledCommentsList, StyledCommentText } from './CommentsList.styled';

interface CommentsListProps {
  comments: Item[];
}
const CommentsList = ({ comments }: CommentsListProps) => {
  return (
    <>
      <StyledCommentsList>
        {comments.map((item, index) => (
          <StyledCommentsItem key={item.id}>
            <StyledCommentIndex>{index + 1}</StyledCommentIndex>
            <StyledCommentText>{item.content}</StyledCommentText>
            {item.comments && item.comments.length > 0 && <CommentsList key={index} comments={item.comments} />}
          </StyledCommentsItem>
        ))}
      </StyledCommentsList>
    </>
  );
};

export default CommentsList;
