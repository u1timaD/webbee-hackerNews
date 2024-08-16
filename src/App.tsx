import './App.css';
import NewsDetail from './pages/NewsDetail/NewsDetail';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './pages/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme.ts';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="news/:id" element={<NewsDetail />} />
              <Route path="404" element={<ErrorPage />} />
            </Route>
          </Routes>
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
