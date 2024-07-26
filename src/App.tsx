import './App.css';
import NewsDetail from './page/NewsDetail/NewsDetail';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import NewsMain from './page/NewsMain/NewsMain';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<NewsMain />} />
          <Route path="news/:id" element={<NewsDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
