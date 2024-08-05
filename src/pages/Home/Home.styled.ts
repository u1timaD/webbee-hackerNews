import { List } from '@mui/material';
import styled from '@emotion/styled';

export const NewsList = styled(List)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: 0;
`;
