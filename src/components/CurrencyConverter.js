import React, { useState } from "react";
import Header from "./Header";
import "../components/CurrencyConverter.css";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [conversionResult, setConversionResult] = useState(null);
  const [error, setError] = useState(null);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleConvert = async () => {
    const apiUrl = `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`;

    console.log("API URL:", apiUrl);

    try {
      const resp = await fetch(apiUrl);
      const data = await resp.json();

      // Check if the response has the expected structure
      if (data && data.rates) {
        setConversionResult(data);
        setError(null);
      } else {
        setError("Invalid response format. Please try again.");
        setConversionResult(null);
      }
    } catch (error) {
      console.error("Error fetching conversion data:", error);
      setError("Error fetching conversion data. Please try again.");
      setConversionResult(null);
    }
  };

  return (
    <>
      <Header />

      <h2>Currency Converter</h2>
      <div className="marginTopClass">
        <input
          placeholder="Enter amount"
          name="amount"
          type="number"
          className="marginClass"
          value={amount}
          onChange={handleAmountChange}
        />
        <label htmlFor="from" className="marginClass">
          From
        </label>
        <select
          id="from"
          name="from"
          className="marginClass"
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>
        <label htmlFor="to" className="marginClass">
          To
        </label>
        <select
          id="to"
          name="to"
          className="marginClass"
          value={toCurrency}
          onChange={handleToCurrencyChange}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>
        <button className="marginClass" onClick={handleConvert}>
          Convert
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      {conversionResult && conversionResult.rates && (
        <div className="conversionResult">
          <h6 className="marginTopClass">
            Result :{amount} {fromCurrency} is equal to{" "}
            {conversionResult.rates[toCurrency]} {toCurrency}
          </h6>
        </div>
      )}
    </>
  );
}
