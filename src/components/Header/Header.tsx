import { Container } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import {
  HeaderLogoLink,
  HeaderWrapper,
  UpdateButton,
  HeaderStyled,
  ReturnButton,
  ButtonWrapper,
} from './Header.styled';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <HeaderStyled component="header">
      <Container>
        <HeaderWrapper>
          <HeaderLogoLink to="/">
            <h1>HACKER NEWS</h1>
          </HeaderLogoLink>
          <ButtonWrapper>

            <Link to="/">
              <ReturnButton>
                <KeyboardReturnIcon fontSize="large" />
              </ReturnButton>
            </Link>

            <UpdateButton>
              <UpdateIcon fontSize="large" />
            </UpdateButton>
            
          </ButtonWrapper>
        </HeaderWrapper>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
