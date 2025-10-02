import WalletIcon from '../../assets/icons/wallet.svg?react';
import PayIcon from '../../assets/icons/pay.svg?react';
import Slot1Img from '../../assets/img/slot1.jpg';
import Slot2Img from '../../assets/img/slot2.webp';
import Slot3Img from '../../assets/img/slot3.webp';
import Slot4Img from '../../assets/img/slot4.png';


export const BetPage = () => {
    return (
        <>
            <div className="w-full min-h-screen bg-amber-600">
                <header className="flex items-center justify-between w-full text-xl">
                    <h1 id="pageTitle" className="text-center">Steve Trabalhinhos Sortudo</h1>
                    <nav className="flex">
                        <figure id="withdrawBox" className="flex flex-col bg-slate-500 items-center justify-center rounded-full h-18 min-w-18 m-1 mr-0 shadow-md cursor-pointer">
                            <WalletIcon className="fill-gray-300 w-7 h-7 m-0 p-0 relative bottom-0.5" />
                            <figcaption className="text-gray-300 m-0 p-0 text-[1rem] font-semibold relative bottom-1.5">Saque</figcaption>
                        </figure>
                        <figure id="depositBox" className="flex flex-col bg-slate-500 items-center justify-center rounded-full h-18 min-w-18 m-1 shadow-md cursor-pointer">
                            <PayIcon className="fill-gray-300  w-7 h-7 m-0 p-0 relative bottom-0.5" />
                            <figcaption className="text-gray-300 m-0 p-0 text-[1rem] font-semibold relative bottom-1.5">Depósito</figcaption>
                        </figure>
                    </nav>
                </header>

                <main>
                    <div id="board" className="">
                        <div className="grid grid-cols-3 grid-rows-3 gap-1 bg-orange-400 border-1 border-red-900 shadow-md place-items-center">
                            <img src={Slot1Img} />
                            <img src={Slot2Img} />
                            <img src={Slot3Img} />
                            <img src={Slot4Img} />
                            <img src={Slot1Img} />
                            <img src={Slot4Img} />
                            <img src={Slot3Img} />
                            <img src={Slot2Img} />
                            <img src={Slot1Img} />
                        </div>
                    </div>

                    <div id="boardButtons" className="flex justify-center">
                        <div id="betValueBox">
                            <button className="bg-blue-500 text-yellow-300 rounded-2xl w-[32px] h-[32px] shadow-md m-1 cursor-pointer active:bg-blue-600"> - </button>
                            <input type="number" min="1" step="0.05" className="bg-gray-200 text-black rounded-2xl px-1 py-1 shadow-md m-1 active:bg-gray-300"></input>
                            <button className="bg-blue-500 text-yellow-300 rounded-2xl w-[32px] h-[32px] shadow-md m-1 cursor-pointer active:bg-blue-600"> + </button>
                        </div>
                        <div className="bg-blue-500 text-yellow-300 rounded-2xl px-2 py-1 shadow-md m-1 cursor-pointer active:bg-blue-600">
                            <img />
                            <p>Apostar</p>
                        </div>
                        <div className="bg-blue-600 text-orange-400 rounded-2xl px-2 py-1 shadow-md m-1 cursor-pointer active:bg-blue-800">
                            <img />
                            <p>Turbo</p>
                        </div>
                    </div>
                </main>

                <footer>
                    <p>StealMoneyGames LTD.™ - All rights reserved</p>
                </footer>
            </div >
        </>
    )
}