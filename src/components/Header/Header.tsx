import { Container, Typography } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { HeaderLogoLink, HeaderWrapper, HeaderStyled, ReturnButton, ButtonWrapper } from './Header.styled';
import { Link, useLocation } from 'react-router-dom';

import UpdateButton from '../UpdateButton/UpdateButton';
import { pages } from '../../utils/constants';

const Header = () => {
  const location = useLocation();

  return (
    <HeaderStyled component="header">
      <Container>
        <HeaderWrapper>
          <HeaderLogoLink to="/">
            <Typography variant="h1">HACKER NEWS</Typography>
          </HeaderLogoLink>
          <ButtonWrapper>
            {location.pathname !== pages.home && (
              <Link to="/">
                <ReturnButton>
                  <KeyboardReturnIcon fontSize="large" />
                </ReturnButton>
              </Link>
            )}
            <UpdateButton />
          </ButtonWrapper>
        </HeaderWrapper>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
