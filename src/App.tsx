import './App.css';
import NewsDetail from './pages/NewsDetail/NewsDetail';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './pages/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="news/:id" element={<NewsDetail />} />
        <Route path="404" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
