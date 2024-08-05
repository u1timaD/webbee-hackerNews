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
  background-color: #d9e5fe;
  padding: ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  box-shadow:
    1px 3px 6px 0px #74939c4d,
    0px 0px 1px 0px #74939c80;
  width: 100%;
`;

export const StyledCommentsUser = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  margin-right: auto;
`;

export const StyledCommentsTime = styled(Typography)`
  font-size: 14px;
  color: #9c9c9c;
`;
