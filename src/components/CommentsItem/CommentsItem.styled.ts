import { Box, ListItem, Typography } from '@mui/material';
import styled from '@emotion/styled';

export const StyledCommentsItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0;
  margin: 0;
  gap: 24px;
`;

export const StyledCommentsBlock = styled(Box)`
  display: flex;
  gap: 10px;
  flex-direction: column;
  cursor: pointer;
  background-color: #d9e5fe;
  padding: 20px 20px;
  border-radius: 10px;
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
