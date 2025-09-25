import { ReactComponent as WalletIcon } from '../../assets/icons/wallet.svg';

export const BetPage = () => {
    return (
        <>
            <div className="w-full min-h-screen bg-amber-600">
                <header className="flex items-center justify-between w-full text-xl">
                    <h1 id="pageTitle" className="text-center">Steve Jobszinho</h1>
                    <nav className="flex">
                        <figure id="withdrawBox">
                            <WalletIcon className="w-6 h-6 fill-red" />
                            <figcaption>Sacar</figcaption>
                        </figure>
                        <figure id="depositBox">
                            <img />
                            <figcaption>Depositar</figcaption>
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