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
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const NewsInfo = styled(Box)`
  display: flex;
  align-items: end;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const NewsRating = styled(Typography)`
  display: flex;
  padding: ${({ theme }) => theme.spacing(1, 2)};
  background-color: ${({ theme }) => theme.palette.primary.dark};
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
`;

export const NewsAuthor = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  text-transform: lowercase;
`;

export const NewsDate = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  color: ${({ theme }) => theme.palette.text.secondary};
  text-transform: lowercase;
`;
