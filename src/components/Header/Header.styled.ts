import { IconButton, Box  } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.palette.backgroundGradient.header};
  box-shadow: ${({ theme }) => theme.palette.backgroundShadows.header};
`;

export const HeaderLogoLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const HeaderWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ReturnButton = styled(IconButton)`
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.palette.primary.main};

  &:hover {
    background-color: ${({ theme }) => theme.palette.info.light};
  }
`;

export const ButtonWrapper = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;
