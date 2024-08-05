import { CommentProps } from '../../Types/interface';

import CommentsItem from '../CommentsItem/CommentsItem';
import { StyledCommentsItem, StyledCommentsList } from './NestedComments.styled';

interface CommentsListProps {
  comments: CommentProps[];
}
const NestedComments = ({ comments }: CommentsListProps) => {
  return (
    <>
      <StyledCommentsList>
        {comments.map((item) => (
          <StyledCommentsItem
            key={item.id}
            style={{
              paddingLeft: item.level * 40,
            }}
          >
            <StyledCommentsList>
              <CommentsItem {...item} />
            </StyledCommentsList>
          </StyledCommentsItem>
        ))}
      </StyledCommentsList>
    </>
  );
};

export default NestedComments;
