import { useLocation, useParams } from 'react-router-dom';
import { useNewsDetailStore, useNewsStore } from '../../zustand/store';
import UpdateIcon from '@mui/icons-material/Update';
import { StyledUpdateButton } from './UpdateButton.styled';
import { pages } from '../../utils/constants';

const UpdateButton = () => {
  const { fetchAllNews } = useNewsStore();
  const { fetchNewsDetail } = useNewsDetailStore();
  const location = useLocation();
  const { id } = useParams();

  const handleUpdate = () => {
    location.pathname === pages.home && fetchAllNews();
    location.pathname.includes(pages.news) && fetchNewsDetail(Number(id));
  };

  return (
    <StyledUpdateButton onClick={handleUpdate}>
      <UpdateIcon fontSize="large" />
    </StyledUpdateButton>
  );
};

export default UpdateButton;
