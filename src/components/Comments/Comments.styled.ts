import styled from '@emotion/styled';
import { Box, Button, List, ListItem } from '@mui/material';

export const StyledCommentsList = styled(List)`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  gap: ${({ theme }) => theme.spacing(3)};
  width: 100%;
`;

export const StyledCommentsItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 0;
  margin: 0;
`;

export const StyledCommentsWrapper = styled(Box)`
  margin-left: 30px;
  margin-top: 20px;
`;

export const CommentsCountBlock = styled(Box)`
  display: flex;
  color: ${({ theme }) => theme.palette.info.dark};
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-left: auto;
`;

export const StyledCommentsBlock = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.backgroundColors.comment};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  box-shadow: ${({ theme }) => theme.palette.backgroundShadows.comment};
  width: 100%;
`;

export const StyledToggleComments = styled(Button)`
  color: ${({ theme }) => theme.palette.info.dark};
  padding: 0;
  width: fit-content;
  align-self: flex-end;
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
`;
