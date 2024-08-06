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

  const handleUpdate = () => {
    if (location.pathname === pages.home) {
      fetchAllNews(true);
      return;
    }

    if (location.pathname.includes(pages.news)) {
      fetchNewsDetail(Number(id), true);
    }
  };

  return (
    <StyledUpdateButton onClick={handleUpdate}>
      <UpdateIcon fontSize="large" />
    </StyledUpdateButton>
  );
};

export default UpdateButton;
