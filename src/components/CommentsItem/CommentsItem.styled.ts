import { Collapse, ListItem, Typography } from '@mui/material';
import styled from '@emotion/styled';

export const StyledCommentsItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0;
  margin: 0;
  gap: 10px;
`;
export const StyledCommentText = styled(Typography)`
  font-size: 12px;

  text-align: left;
  & + ul {
    padding-left: 50px;
  }
`;

export const CommentIndex = styled(Typography)`
  font-size: 15px;
  font-weight: 700;
`;
export const StyledCollapseStyled = styled(Collapse)`
  margin-left: 120px;
`;

export const CommentsCountText = styled(Typography)``;