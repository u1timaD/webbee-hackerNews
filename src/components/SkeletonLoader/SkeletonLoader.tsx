import { Skeleton } from '@mui/material';

interface SkeletonLoaderProps {
  count?: number;
}

const SkeletonLoader = ({ count = 1 }: SkeletonLoaderProps) => {
  return Array(count)
    .fill(null)
    .map((_, index) => <Skeleton key={index} variant="rectangular" animation="wave" width="100%" height={120} />);
};

export default SkeletonLoader;
