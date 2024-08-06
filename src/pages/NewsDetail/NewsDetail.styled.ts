import { Button, Collapse, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const NewsDetailWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
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
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
`;

export const NewsInfo = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const NewsAuthor = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  text-transform: lowercase;
`;

export const NewsDate = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  color: ${({ theme }) => theme.palette.text.secondary};
  text-transform: lowercase;
`;

export const NewTitleWrapper = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const NewsTitle = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  margin-right: auto;
`;

export const NewsLink = styled(Button)`
  display: flex;
  min-width: 132px;
  height: 38px;
  &:hover {
    background-color: ${({ theme }) => theme.palette.info.dark};

    a {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  & a {
    box-sizing: border-box;
    font-size: ${({ theme }) => theme.typography.h3.fontSize};
    text-decoration: none;
    color: inherit;
  }
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
