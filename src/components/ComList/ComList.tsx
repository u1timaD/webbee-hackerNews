import { List } from '@mui/material';
import { CommentIndex, CommentsItem, CommentsList, CommentText } from '../../page/NewsSingle/NewsSingle.styled';

const ComList = ({ comments }) => {
  return (
    <>
      <CommentsList>
        {comments.map((item, index) => (
          <CommentsItem key={item.id}>
            <CommentIndex>{index + 1}</CommentIndex>
            <CommentText>{item.content}</CommentText>
            {item.comments && item.comments.length > 0 && <ComList key={index} comments={item.comments} />}
          </CommentsItem>
        ))}
      </CommentsList>
    </>
  );
};

export default ComList;
