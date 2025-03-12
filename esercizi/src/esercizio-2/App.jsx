import React, { useState, useEffect, useMemo } from "react";

function App() {
  const [eurAmount, setEurAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/EUR`)
      .then((r) => r.json())
      .then((data) => setExchangeRate(data.rates.USD));
  }, []);

  const usdAmount = useMemo(() => {
    return (eurAmount * exchangeRate).toFixed(2);
  }, [eurAmount, exchangeRate]);

  return (
    <div className="flex flex-col gap-2">
      <input
        className="border-2 border-gray-300 rounded-lg"
        type="number"
        value={eurAmount}
        onChange={(e) => setEurAmount(e.target.value)}
      />
      <p>
        {eurAmount} EUR = {usdAmount} USD
      </p>
    </div>
  );
}

export default App;
