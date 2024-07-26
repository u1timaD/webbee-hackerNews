import { CommentsCountText, StyledCollapseStyled, StyledCommentsItem } from './CommentsItem.styled';
import CommentsList from '../CommentsList/CommentsList';
import { useState } from 'react';
import { Item } from '../../Types/interface';

const CommentsItem = ({ id, content, comments }: Item) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    comments.length !== 0 && setOpen(!open);
  };

  return (
    <StyledCommentsItem key={id}>
      <CommentsCountText onClick={handleClick}>
        {content === '[deleted]' ? 'Коментарий удалён' : content}
      </CommentsCountText>

      <StyledCollapseStyled in={open} timeout="auto" unmountOnExit>
        {comments && <CommentsList key={id} comments={comments} />}
      </StyledCollapseStyled>
    </StyledCommentsItem>
  );
};

export default CommentsItem;
