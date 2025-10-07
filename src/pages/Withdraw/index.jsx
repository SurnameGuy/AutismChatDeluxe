import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const WithdrawPage = () => {

    return (
        <>
            <div className="w-full min-h-screen bg-amber-500">
                <Header />
                <main>
                    <form className="flex flex-col items-center">
                        <p>Saldo: R$ 5.00</p>
                        <input type="number" min="10" step="0.05" className="bg-gray-200 text-black rounded-2xl px-1 py-1 shadow-md m-1 active:bg-gray-300 hover:brightness-95 w-50" placeholder="Valor a sacar"></input>
                        <input type="text" className="bg-gray-200 text-black rounded-2xl px-1 py-1 shadow-md m-1 active:bg-gray-300 hover:brightness-95 w-50" placeholder="Chave PIX"></input>
                        <input type="submit" className="bg-yellow-500 text-black rounded-2xl px-1 py-1 shadow-md m-1 active:bg-gray-300 hover:brightness-95 w-50" value="Sacar"></input>
                    </form>
                </main>
                <Footer />
            </div>
        </>
    )
}