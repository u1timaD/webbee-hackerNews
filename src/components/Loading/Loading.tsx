import { Skeleton } from '@mui/material';

interface LoadingProps {
  count: number;
}

const Loading = ({ count }: LoadingProps) => {
  return Array(count)
    .fill(null)
    .map((_, index) => <Skeleton key={index} variant="rectangular" animation="wave" width="100%" height={120} />);
};

export default Loading;
