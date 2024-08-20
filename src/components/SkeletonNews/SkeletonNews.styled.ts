import styled from '@emotion/styled';
import { Skeleton } from '@mui/material';
import { SkeletonNewsStyledProps } from './SkeletonNews.types';

export const SkeletonNewsStyled = styled(Skeleton)<SkeletonNewsStyledProps>`
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
