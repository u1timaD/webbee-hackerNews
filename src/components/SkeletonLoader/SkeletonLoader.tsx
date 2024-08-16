import { SkeletonNewsStyled } from './SkeletonLoader.styled';
import { SkeletonLoaderProps } from './SkeletonLoader.types';



const SkeletonNews = ({ count = 1 }: SkeletonLoaderProps) => {
  return Array(count)
    .fill(null)
    .map((_, index) => <SkeletonNewsStyled key={index} variant="rectangular" animation="wave" count={count} />);
};

export default SkeletonNews;
