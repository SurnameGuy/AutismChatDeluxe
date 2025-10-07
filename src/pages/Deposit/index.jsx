import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { QrCodePix } from 'qrcode-pix';
import { useState } from "react";

export const DepositPage = () => {
    const [qrCodeBase64, setQrCodeBase64] = useState(null);

    const gerarQrCode = async () => {
        const qrCodePix = QrCodePix({
            // Criação do payload Pix
            version: '01',
            key: 'asdasd', // e.g., email, CPF, CNPJ, phone
            name: 'asdasd',
            city: 'asdasdasd',
            message: 'Me dá um real aí me dá um real', // Optional
            value: 99999999.99, // Optional for static, required for dynamic
        });

        const base64 = await qrCodePix.base64();
        setQrCodeBase64(base64);
    };

    return (
        <>
            <div className="w-full min-h-screen bg-amber-500">
                <Header />
                <main>
                    <div className="flex flex-col items-center">
                        <p>Saldo: R$ 5.00</p>
                        <input type="number" min="10" step="0.05" className="bg-gray-200 text-black rounded-2xl px-1 py-1 shadow-md m-1 active:bg-gray-300 hover:brightness-95 w-50" placeholder="Valor a depositar"></input>
                        <button className="bg-yellow-500 text-black rounded-2xl px-1 py-1 shadow-md m-1 active:bg-gray-300 hover:brightness-95 w-50" onClick={() => gerarQrCode()}>Gerar QR Code PIX</button>
                        {qrCodeBase64 && (
                            <div className="flex flex-col items-center mt-10">
                                <img src={qrCodeBase64} alt="QR Code Pix" />
                                <p>Faça o depósito via PIX, será compensado em até 5 minutos.</p>
                            </div>
                        )}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}