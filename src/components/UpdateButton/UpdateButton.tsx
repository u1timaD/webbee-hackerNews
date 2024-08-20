import { useLocation, useParams } from 'react-router-dom';
import { useNewsStore } from '../../Store/news';
import { useNewsDetailStore } from '../../Store/newsDetail';
import UpdateIcon from '@mui/icons-material/Update';
import { StyledUpdateButton } from './UpdateButton.styled';
import { pages } from '../../utils/constants';

const UpdateButton = () => {
  const { fetchAllNews } = useNewsStore();
  const { fetchNewsDetail } = useNewsDetailStore();
  const location = useLocation();
  const { id } = useParams();
  const isHome = location.pathname === pages.home;

  return (
    <StyledUpdateButton
      onClick={() => {
        isHome ? fetchAllNews(true) : fetchNewsDetail(Number(id), true);
      }}
    >
      <UpdateIcon fontSize="large" />
    </StyledUpdateButton>
  );
};

export default UpdateButton;
