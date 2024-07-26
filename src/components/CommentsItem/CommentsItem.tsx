import { CommentsCountText, StyledCollapseStyled, StyledCommentsItem } from './CommentsItem.styled';
import CommentsList from '../CommentsList/CommentsList';
import { useState } from 'react';

const CommentsItem = ({ index, id, content, comments }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    comments.length !== 0 && setOpen(!open);
  };

  // console.log(comments);

  return (
    <StyledCommentsItem key={id}>
      <CommentsCountText onClick={handleClick}>
        {index + 1} <br />
        {content === '[deleted]' ? 'Коментарий удалён' : content}
      </CommentsCountText>

      <StyledCollapseStyled in={open} timeout="auto" unmountOnExit>
        {comments && <CommentsList key={index} comments={comments} />}
      </StyledCollapseStyled>
    </StyledCommentsItem>
  );
};

export default CommentsItem;
