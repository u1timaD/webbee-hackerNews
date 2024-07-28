import './App.css';
import NewsDetail from './pages/NewsDetail/NewsDetail';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="news/:id" element={<NewsDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
