import { BetSlot } from '../../components/BetSlot';
import { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const BetPage = () => {

    const randomInt = ({ min, max }) => {
        let slotsArray = [];
        for (let i = 0; i < 9; i++) {
            slotsArray.push(Math.floor(Math.random() * (max - min + 1) + 1));
        }
        return slotsArray;
    };

    const [slots, setSlots] = useState(randomInt({ min: 1, max: 4 }));

    return (
        <>
            <div className="w-full min-h-screen bg-amber-500">
                <Header />

                <main>
                    <div id="board" className="">
                        <div className="grid grid-cols-3 max-w-md mx-auto border-2 bg-orange-400 border-red-900 shadow-md place-items-center mb-2">
                            <BetSlot slots={slots} />
                        </div>
                    </div>

                    <div id="boardButtons" className="flex justify-center">
                        <div id="betValueBox">
                            <button className="bg-blue-500 text-yellow-300 rounded-2xl w-[32px] h-[32px] shadow-md m-1 cursor-pointer active:bg-blue-600 hover:brightness-95"> - </button>
                            <input type="number" min="1" step="0.05" className="bg-gray-200 text-black rounded-2xl px-1 py-1 shadow-md m-1 active:bg-gray-300 hover:brightness-95"></input>
                            <button className="bg-blue-500 text-yellow-300 rounded-2xl w-[32px] h-[32px] shadow-md m-1 cursor-pointer active:bg-blue-600 hover:brightness-95"> + </button>
                        </div>
                        <div className="bg-blue-500 text-yellow-300 rounded-2xl px-2 py-1 shadow-md m-1 cursor-pointer active:bg-blue-600 hover:brightness-95" onClick={() => setSlots(randomInt({ min: 1, max: 4 }))}>
                            <img />
                            <p>Apostar</p>
                        </div>
                        <div className="bg-blue-600 text-orange-400 rounded-2xl px-2 py-1 shadow-md m-1 cursor-pointer active:bg-blue-800 hover:brightness-95">
                            <img />
                            <p>Turbo</p>
                        </div>
                    </div>
                </main>

                <Footer />
            </div >
        </>
    )
}