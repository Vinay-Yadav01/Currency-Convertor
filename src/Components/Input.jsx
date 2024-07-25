import React from 'react'

function Input({label, currencys=[], onConvertedCurrencyChange, onCurrencyChange}) {
  return (
    <div className='w-[80%] h-28 p-2 rounded-lg'>
        <h3>{label}</h3>
        <select className="w-[100%] h-16 p-2 rounded-lg mt-1 outline" onChange={(e)=> (onCurrencyChange && onCurrencyChange(e.target.value)) || ( onConvertedCurrencyChange && onConvertedCurrencyChange(e.target.value))}>
          {currencys.map((currency) => (
            <option key={currency} value={currency} >{currency.toUpperCase()}</option>
          ))}
        </select>
    </div>
  )
}

export default Input