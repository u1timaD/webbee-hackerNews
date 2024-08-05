import { Box, ListItem, Typography } from '@mui/material';
import styled from '@emotion/styled';

export const StyledCommentsItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0;
  margin: 0;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const StyledCommentsBlock = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  flex-direction: column;
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.backgroundColors.comment};
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  box-shadow: ${({ theme }) => theme.palette.backgroundShadows.comment};
  width: 100%;
`;

export const StyledCommentsUser = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  margin-right: auto;
`;

export const StyledCommentsTime = styled(Typography)`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;
