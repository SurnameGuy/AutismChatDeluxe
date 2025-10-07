import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BetPage } from "./pages/Bet";
import { NotFoundPage } from './pages/NotFound';
import { WithdrawPage } from "./pages/Withdraw";
import { DepositPage } from './pages/Deposit';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BetPage />} />
          <Route path="withdraw" element={<WithdrawPage />} />
          <Route path="deposit" element={<DepositPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App