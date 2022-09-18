import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/commons/layout';
import { MainPage } from '../pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};