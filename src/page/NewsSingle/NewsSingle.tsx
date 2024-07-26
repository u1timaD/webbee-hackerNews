import CommentIcon from '@mui/icons-material/Comment';
import {
  CommentIndex,
  CommentsBlock,
  CommentsCountBlock,
  CommentsCountText,
  CommentsItem,
  CommentText,
  NewsAuthor,
  NewsBlock,
  NewsDate,
  NewsInfo,
  NewsLink,
  NewsSingleSection,
  NewsSingleWrapper,
  NewsTitle,
  NewTitleWrapper,
} from './NewsSingle.styled';

import commentsData from '../../utils/comments.json';
import ComList from '../../components/ComList/ComList';
import { useState } from 'react';
import { Collapse } from '@mui/material';



const NewsSingle = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <NewsSingleSection component="section">
        <NewsSingleWrapper>
          <NewsBlock>
            <NewTitleWrapper>
              <NewsTitle variant="h2">Заголовок новости</NewsTitle>
              <NewsLink variant="contained" href="#">
                Link to news
              </NewsLink>
            </NewTitleWrapper>
            <NewsInfo>
              <NewsAuthor>автор</NewsAuthor>
              <NewsDate>Дата</NewsDate>
              <CommentsCountBlock>
                <CommentsCountText>1000000000</CommentsCountText>
                <CommentIcon />
              </CommentsCountBlock>
            </NewsInfo>
          </NewsBlock>
          <CommentsBlock>
            {commentsData.comments.map((item, index) => (
              <CommentsItem key={item.id}>
                <CommentText onClick={handleClick}>
                  <CommentIndex>{index + 1}</CommentIndex>
                  {item.content}
                </CommentText>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  {item.comments && item.comments.length > 0 && <ComList key={index} comments={item.comments} />}
                </Collapse>
              </CommentsItem>
            ))}
          </CommentsBlock>
        </NewsSingleWrapper>
      </NewsSingleSection>
    </>
  );
};

export default NewsSingle;
