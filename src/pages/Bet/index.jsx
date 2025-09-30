import WalletIcon from '../../assets/icons/wallet.svg?react';
import PayIcon from '../../assets/icons/pay.svg?react';

export const BetPage = () => {
    return (
        <>
            <div className="w-full min-h-screen bg-amber-600">
                <header className="flex items-center justify-between w-full text-xl">
                    <h1 id="pageTitle" className="text-center">Steve Jobszinho</h1>
                    <nav className="flex">
                        <figure id="withdrawBox" className="flex flex-col bg-slate-500 items-center justify-center rounded-full h-18 min-w-18 m-1 mr-0 shadow-md">
                            <WalletIcon className="fill-gray-300 w-7 h-7 m-0 p-0 relative bottom-0.5" />
                            <figcaption className="text-gray-300 m-0 p-0 text-[1rem] font-semibold relative bottom-1.5">Saque</figcaption>
                        </figure>
                        <figure id="depositBox" className="flex flex-col bg-slate-500 items-center justify-center rounded-full h-18 min-w-18 m-1 shadow-md">
                            <PayIcon className="fill-gray-300  w-7 h-7 m-0 p-0 relative bottom-0.5" />
                            <figcaption className="text-gray-300 m-0 p-0 text-[1rem] font-semibold relative bottom-1.5">Depósito</figcaption>
                        </figure>
                    </nav>
                </header>

                <main>
                    <img id="steveJobs" />

                    <div>
                        <div id="betValueBox">
                            <button> - </button>
                            <input type="number" min="1" step="any"></input>
                            <button> + </button>
                        </div>
                        <div>
                            <button>Apostar</button>
                        </div>
                        <div>
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