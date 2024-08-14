import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

export const ErrorWrapper = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const ErrorTitle = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  color: ${({ theme }) => theme.palette.error.main};
`;
export const ErrorDescription = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
`;
