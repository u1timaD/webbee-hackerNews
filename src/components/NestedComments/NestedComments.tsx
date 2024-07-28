import { Item } from '../../Types/interface';
import { StyledCommentsItem, StyledCommentsList } from './NestedComments.styled';
import CommentsItem from '../CommentsItem/CommentsItem';

interface CommentsListProps {
  comments: Item[];
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
