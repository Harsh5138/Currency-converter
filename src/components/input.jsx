import React, { useId } from "react";

function Input({
  label,                                              //what currency name user passing
  amount,                                             //amount insert by user
  onAmountChange,                                     //This becoz if amt is change then we have to change a state by this we r controlling input
  onCurrencyChange,                                   //This becoz if amt is change then we have to change a state by this we r controlling input
  currencyOptions = [],                               //by this we'll get all the currency option in the form of array.
  selectCurrency = "usd",                             //by this we select which currency we want to select by default 'usd'
  amountDisable = false,                              //this for if the user does not want to gave any amount
  currencyDisable = false,                            //this for if the user does not want to gave any currency.
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default Input;
