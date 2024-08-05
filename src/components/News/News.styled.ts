import { ListItem, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const NewsItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  padding: 0;
  background-color: ${({ theme }) => theme.palette.backgroundColors.news};
  box-shadow: ${({ theme }) => theme.palette.backgroundShadows.comment};
  overflow: hidden;
`;

export const NewsLink = styled(Link)`
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  padding: ${({ theme }) => theme.spacing(3, 2)};
  width: 100%;

  &:after {
    position: absolute;
    content: '';
    width: 10px;
    height: 34px;
    right: -12px;
    top: 14px;
    background-color: ${({ theme }) => theme.palette.info.dark};
    transition: all 0.3s;
  }

  &:before {
    position: absolute;
    content: '';
    width: 10px;
    height: 34px;
    right: -12px;
    top: 56px;
    background-color: ${({ theme }) => theme.palette.info.main};
    transition: all 0.3s;
  }

  &:hover::after,
  &:hover::before {
    right: 0;
    transition: all 0.3s;
  }
`;

export const NewsTitle = styled(Typography)`
  font-size: 26px;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const NewsInfo = styled(Box)`
  display: flex;
  align-items: end;
  gap: 16px;
`;

export const NewsRating = styled(Typography)`
  display: flex;
  padding: ${({ theme }) => theme.spacing(1, 2)};
  background-color: ${({ theme }) => theme.palette.primary.dark};
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 12px;
  font-weight: 600;
`;

export const NewsAuthor = styled(Typography)`
  font-size: 12px;
  font-weight: 600;
  text-transform: lowercase;
`;

export const NewsDate = styled(Typography)`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.text.secondary};
  text-transform: lowercase;
`;
