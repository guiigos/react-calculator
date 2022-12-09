import React, { useState } from "react";
import calculate from "calculate-string";
import './Calculator.css';

function Calculator() {
  const [text, setText] = useState('');

  const handlerInput = (value) => () => setText(current => `${current}${value}`);
  const handlerCalc = () => setText(current => calculate(current));
  const handlerClean = () => setText(' ');

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">{text}</div>
        
        {Array.from(Array(10).keys()).map((number) => (
          <div 
            key={number} 
            className={`button __${number}`} 
            onClick={handlerInput(number)}>
              {number}
          </div>
        ))}

        <div className="button dot" onClick={handlerInput('.')}>.</div>
        <div className="button sum" onClick={handlerInput(' + ')}>+</div>
        <div className="button subtract" onClick={handlerInput(' - ')}>-</div>
        <div className="button multiply" onClick={handlerInput(' * ')}>*</div>
        <div className="button divide" onClick={handlerInput(' / ')}>/</div>
        <div className="button result" onClick={handlerCalc}>=</div>
        <div className="button clean" onClick={handlerClean}>C</div>
      </div>
    </div>
  );
}

export default Calculator;
