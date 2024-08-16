import { SkeletonNewsStyled } from './SkeletonNews.styled';
import { SkeletonNewsProps } from './SkeletonNews.types';

const SkeletonNews = ({ count = 1 }: SkeletonNewsProps) => {
  return Array(count)
    .fill(null)
    .map((_, index) => <SkeletonNewsStyled key={index} variant="rectangular" animation="wave" count={count} />);
};

export default SkeletonNews;
