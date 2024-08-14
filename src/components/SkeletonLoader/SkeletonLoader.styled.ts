import styled from '@emotion/styled';
import { Skeleton } from '@mui/material';
import { SkeletonStyledProps } from './SkeletonLoader.types';

export const SkeletonStyled = styled(Skeleton)<SkeletonStyledProps>`
  width: 100%;
  height: 140px;
  top: 0;

  ${({ count }) =>
    count === 1 &&
    `
  position: absolute;
  content: '';
  `}
`;
