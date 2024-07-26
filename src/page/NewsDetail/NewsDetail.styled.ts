import { Button, Collapse, Link, List, ListItem, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const NewsDetailSection = styled(Box)``;

export const NewsDetailWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 0;
`;

export const NewsBlock = styled(Box)`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  gap: 20px;
  background-color: #fdfefe;
  box-shadow:
    1px 3px 6px 0px #74939c4d,
    0px 0px 1px 0px #74939c80;
  overflow: hidden;
  padding: 25px 20px;
`;

export const NewsDescription = styled(Typography)`
  font-weight: 400;
  color: #777777;
`;

export const NewsInfo = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NewsAuthor = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  text-transform: lowercase;
`;

export const NewsDate = styled(Typography)`
  font-size: 18px;
  font-weight: 400;
  color: #9c9c9c;
  text-transform: lowercase;
`;

export const NewTitleWrapper = styled(Box)`
  display: flex;
  gap: 20px;
`;

export const NewsTitle = styled(Typography)`
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const NewsLink = styled(Button)`
  margin-left: auto;
  min-width: 132px;
  height: 38px;
`;

export const CommentsCountBlock = styled(Box)`
  display: flex;
  color: #1565c0;
  align-items: center;
  gap: 5px;
  margin-left: auto;
`;

export const CommentsCountText = styled(Typography)``;

export const CommentsBlock = styled(List)`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
