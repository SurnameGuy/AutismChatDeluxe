import PayIcon from '../../assets/icons/pay.svg?react';
import WalletIcon from '../../assets/icons/wallet.svg?react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {

    const navigate = useNavigate();

    return (
        <header className="flex items-center justify-between w-full text-xl">
            <h1 id="pageTitle" className="text-center cursor-pointer" onClick={() => navigate('/')}>Steve Trabalhinhos Sortudo</h1>
            <nav className="flex">
                <figure id="withdrawBox" className="flex flex-col bg-slate-500 items-center justify-center rounded-full h-18 min-w-18 m-1 mr-0 shadow-md cursor-pointer active:bg-slate-600 hover:brightness-95" onClick={() => navigate('/withdraw')}>
                    <WalletIcon className="fill-gray-300 w-7 h-7 m-0 p-0 relative bottom-0.5" />
                    <figcaption className="text-gray-300 m-0 p-0 text-[1rem] font-semibold relative bottom-1.5">Saque</figcaption>
                </figure>
                <figure id="depositBox" className="flex flex-col bg-slate-500 items-center justify-center rounded-full h-18 min-w-18 m-1 shadow-md cursor-pointer active:bg-slate-600 hover:brightness-95" onClick={() => navigate('/deposit')}>
                    <PayIcon className="fill-gray-300  w-7 h-7 m-0 p-0 relative bottom-0.5" />
                    <figcaption className="text-gray-300 m-0 p-0 text-[1rem] font-semibold relative bottom-1.5">Depósito</figcaption>
                </figure>
            </nav>
        </header>
    )
}