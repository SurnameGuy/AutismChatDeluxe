import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BetPage } from "./pages/Bet";
import { NotFoundPage } from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BetPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App