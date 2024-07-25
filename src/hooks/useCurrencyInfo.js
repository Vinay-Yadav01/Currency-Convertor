import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((data) => setData(data.rates));
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
