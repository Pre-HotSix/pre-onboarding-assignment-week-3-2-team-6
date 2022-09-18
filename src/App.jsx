import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/commons/layout';
import { MainPage } from './pages/index';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
