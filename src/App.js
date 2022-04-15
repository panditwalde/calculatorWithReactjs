import React, { useState } from 'react';
import './App.css';

function App() {

  const [result, setResult] = useState("0");

  const handleClick = (e) => {

    result.length === 1 && result === "0" ? setResult(e.target.name) : setResult(result.concat(e.target.name))
  }

  const clear = () => {
    setResult(result.slice(0, result.length - 1))
  }


  const calculate = () => {
    try {
      setResult(eval(result).toString())

    } catch (error) {

      setResult("Error")

    }
  }

  



  return (
    <div className="shadow">

      <section class="flex flex-center h100">
        <div class="calc relative">
          <div class="screen flex flex-center">

            <input type="text" name="screen" class="input screen__input" value={result} />
          </div>
          <div class="calc-body">
            <div>
              <button class="button button--gray" onClick={clear}>C</button>
              <button class="button button--gray">+/−</button>
              <button class="button button--gray">%</button>
              <button class="button button--orange" name='÷' onClick={handleClick}>÷</button>
            </div>
            <div>
              <button class="button button--white" name='7' onClick={handleClick}>7</button>
              <button class="button button--white" name='8' onClick={handleClick}>8</button>
              <button class="button button--white" name='9' onClick={handleClick}>9</button>
              <button class="button button--orange" name='*' onClick={handleClick}>×</button>
            </div>
            <div>
              <button class="button button--white" name='4' onClick={handleClick}>4</button>
              <button class="button button--white" name='5' onClick={handleClick}>5</button>
              <button class="button button--white" name='6' onClick={handleClick}>6</button>
              <button class="button button--orange" name='-' onClick={handleClick}>−</button>
            </div>
            <div>
              <button class="button button--white" name='1' onClick={handleClick}>1</button>
              <button class="button button--white" name='2' onClick={handleClick}>2</button>
              <button class="button button--white" name='3' onClick={handleClick}>3</button>
              <button class="button button--orange" name='+' onClick={handleClick}>+</button>
            </div>
            <div>
              <button class="button button--white" name='0' onClick={handleClick}>0</button>
              <button class="button button--white">.</button>
              <button class="button button--white ">&#8592;</button>
              <button class="button button--color" onClick={calculate}>=</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;









