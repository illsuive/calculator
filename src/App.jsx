import {useState} from 'react'
import { evaluate } from 'mathjs';
import './App.css'

let  App = () => {

  
  let [previousInput, setPreviousInput] = useState('');
  let [data, setData] = useState('')  


  




  let handleNumber = (e) => { 
    let value = data.concat(e.target.innerText);

    if (value === '.' && data.includes('.')) {
      let roundedValue = parseFloat(value.toFixed(2));
      setData(roundedValue.toString());
      return;
    }
    setData(value);
  }

 
  const handleClear = () => {
    setData('');
    setPreviousInput('');
  }

  const equalsFunction = () => {
    if (data === '') {
      return;
    }
    setPreviousInput(data);
    let value = evaluate(data);
    setData(value.toString());
  }

  const handleRemove = () => {
    if (data.length > 0) {
      setData(data.slice(0, -1));
    }
  }


 


  return (
      <div className="calculator">
      <h1>{previousInput}</h1>
      <input type="text" className="calculator-display" readOnly value={!data? 0 : data} />
      <button className="btn remove" onClick={handleRemove}>remove</button>
      <div className="calculator-buttons">
      <button className="btn operator" onClick={handleClear}>AC</button>
      <button className="btn operator" onClick={(e)=>handleNumber(e)}>^</button>
      <button className="btn operator" onClick={(e)=>handleNumber(e)}>%</button>
      <button className="btn operator" onClick={(e)=>handleNumber(e)}>/</button>

      <button className="btn" onClick={(e)=>handleNumber(e)}>7</button>
      <button className="btn" onClick={(e)=>handleNumber(e)}>8</button>
      <button className="btn" onClick={(e)=>handleNumber(e)}>9</button>
      <button className="btn operator" onClick={(e)=>handleNumber(e)}>*</button>

      <button className="btn" onClick={(e)=>handleNumber(e)}>4</button>
      <button className="btn" onClick={(e)=>handleNumber(e)}>5</button>
      <button className="btn" onClick={(e)=>handleNumber(e)}>6</button>
      <button className="btn operator" onClick={(e)=>handleNumber(e)}>-</button>

      <button className="btn" onClick={(e)=>handleNumber(e)}>1</button>
      <button className="btn" onClick={(e)=>handleNumber(e)}>2</button>
      <button className="btn" onClick={(e)=>handleNumber(e)}>3</button>
      <button className="btn operator" onClick={(e)=>handleNumber(e)} >+</button>

      <button className="btn zero" onClick={(e)=>handleNumber(e)}>0</button>
      <button className="btn" onClick={(e)=>handleNumber(e)}>.</button>
      <button className="btn operator" onClick={equalsFunction}>=</button>
      </div>
    </div>
  )
}


export default App;
