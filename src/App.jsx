import { useEffect, useState } from "react";
import Footer from "./Components/Footer"
import Input from "./Components/Input"
import Navbar from "./Components/Navbar"
import useCurrencyInfo from "./hooks/useCurrencyInfo";


function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const currencyInfo = useCurrencyInfo(fromCurrency);
  const currencys = Object.keys(currencyInfo);
  // console.log(currencys)

  const swapCurrency = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  }
  
  const convertor = () => {
    // console.log(currencyInfo)
    const rate = currencyInfo[toCurrency];
    console.log(rate)
    setConvertedAmount(amount * rate);

  }

  const onCurrencyChange = (currency) => {
    setFromCurrency(currency);
  }

  const onConvertedCurrencyChange = (currency) => {
    setToCurrency(currency);
  }

  return (
    <>
      <Navbar />
      <div className="bg-custom-gradient h-[610px] w-full flex justify-center items-center">
        <div className="bg-white font-bold h-[80%] w-[30%] rounded-xl flex flex-col justify-center items-center gap-6">
          <h2 className="text-4xl">Currency Convertor</h2>
          <div className='w-[90%] h-28 rounded-lg p-2'>
            <h3>Enter Amount:</h3>
            <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-[100%] h-16 p-2 rounded-lg mt-1 outline" />
          </div>
          <div className="w-[90%] h-28 flex justify-center gap-4 items-end p-1">
            <Input label= "From" currencys={currencys} onCurrencyChange={onCurrencyChange}/>
            <button className="text-2xl w-16 h-16 p-4 my-2 text-white rounded-lg bg-[#675aff]" onClick={swapCurrency}>⇅</button>
            <Input label="To" currencys={currencys} onConvertedCurrencyChange={onConvertedCurrencyChange}/>
          </div>
          <div>{amount} {fromCurrency.toUpperCase()} = {convertedAmount} {toCurrency.toUpperCase()}</div>
          <button className="text-2xl w-[90%] h-16 p-4 text-white rounded-lg bg-[#675aff]" onClick={convertor}>Get Exchange Rate</button>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
