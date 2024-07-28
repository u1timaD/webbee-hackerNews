import { ListItem, List } from '@mui/material';
import styled from '@emotion/styled';

export const StyledCommentsList = styled(List)`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  gap: 20px;
  width: 100%;
`;

export const StyledCommentsItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0;
  margin: 0;
  gap: 10px;
`;
