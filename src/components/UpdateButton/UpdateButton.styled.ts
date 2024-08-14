import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

export const StyledUpdateButton = styled(IconButton)`
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.palette.primary.main};
  
  &:hover {
    background-color: ${({ theme }) => theme.palette.action.hover};
  }
`;
