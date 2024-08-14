import { SkeletonStyled } from './SkeletonLoader.styled';
import { SkeletonLoaderProps } from './SkeletonLoader.types';



const SkeletonLoader = ({ count = 1 }: SkeletonLoaderProps) => {
  return Array(count)
    .fill(null)
    .map((_, index) => <SkeletonStyled key={index} variant="rectangular" animation="wave" count={count} />);
};

export default SkeletonLoader;
