import './App.css';

import NewsSingle from './page/NewsSingle/NewsSingle';
import NewsMain from './page/NewsMain/NewsMain';
import { Container } from '@mui/material';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <NewsSingle />
          <NewsMain />
        </Container>
      </main>
    </>
  );
}

export default App;
