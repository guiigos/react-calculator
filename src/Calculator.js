import React, { useState } from "react";
import './Calculator.css';

function Calculator() {
  const [result, setResult] = useState();

  const handlerInput = (number) => () => {
    setResult(number);
  }

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">{result}</div>
        
        {Array.from(Array(10).keys()).map((number) => (
          <div 
            key={number} 
            className={`button __${number}`} 
            onClick={handlerInput(number)}>
              {number}
          </div>
        ))}

        <div className="button dot">.</div>
        <div className="button sum">+</div>
        <div className="button subtract">-</div>
        <div className="button multiply">*</div>
        <div className="button divide">/</div>
        <div className="button result">=</div>
        <div className="button clean">C</div>
      </div>
    </div>
  );
}

export default Calculator;
