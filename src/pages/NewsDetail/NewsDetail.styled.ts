import { Button, Collapse, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const NewsDetailWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  padding: 0;
`;

export const NewsBlock = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  gap: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.palette.backgroundColors.news};
  box-shadow: ${({ theme }) => theme.palette.backgroundShadows.comment};
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing(3, 2)};
`;

export const NewsDescription = styled(Typography)`
  font-weight: 400;
`;

export const NewsInfo = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const NewsAuthor = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  text-transform: lowercase;
`;

export const NewsDate = styled(Typography)`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.text.secondary};
  text-transform: lowercase;
`;

export const NewTitleWrapper = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const NewsTitle = styled(Typography)`
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 700;
  margin-right: auto;
`;

export const NewsLink = styled(Button)`
  min-width: 132px;
  height: 38px;
`;

export const CommentsCountBlock = styled(Box)`
  display: flex;
  color: ${({ theme }) => theme.palette.info.dark};
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-left: auto;
`;

export const StyledCollapse = styled(Collapse)`
  width: 100%;
  border-left: 1px solid rgba(211, 211, 211, 0.8);
`;
