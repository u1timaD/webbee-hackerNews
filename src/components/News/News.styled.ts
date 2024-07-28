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
  background-color: #fdfefe;
  box-shadow:
    1px 3px 6px 0px #74939c4d,
    0px 0px 1px 0px #74939c80;
  overflow: hidden;
`;

export const NewsLink = styled(Link)`
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  padding: 25px 20px;
  width: 100%;

  &:after {
    position: absolute;
    content: '';
    width: 10px;
    height: 34px;
    right: -12px;
    top: 14px;
    background-color: #516eaa;
    transition: all 0.3s;
  }

  &:before {
    position: absolute;
    content: '';
    width: 10px;
    height: 34px;
    right: -12px;
    top: 56px;
    background-color: #28c3fb;
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
  padding: 6px 10px;
  background-color: #000000;
  color: #ffffff;
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
  color: #9c9c9c;
  text-transform: lowercase;
`;
