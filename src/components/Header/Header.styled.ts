import { IconButton } from '@mui/material';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  color: #fdfefe;
  background: linear-gradient(to right, #0044cc, #0066ff);
  box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, 0.6);
`;

export const HeaderLogoLink = styled(Link)`
  text-decoration: none;
  color: #fdfefe;
`;

export const HeaderWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ReturnButton = styled(IconButton)`
  width: 50px;
  height: 50px;
  color: #fdfefe;
  &:hover {
    background-color: #0044cc;
  }
`;

export const ButtonWrapper = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;
