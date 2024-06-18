import { useState } from 'react';
import './App.css';

function Calculator() {
  const [input,setInput]=useState('')
  const [history, setHistory] = useState([])

  const handleInputValue = (value)=>{
    setInput(input+value);
  }

  const handleClear = ()=>{
    setInput('');
  }

  const handleEqual = ()=>{
    try{
      const result = eval(input);
      setHistory([...history, `${input}=${result}`])
      setInput(result.toString());
    }catch{
      setInput('Error');
    }
  }


  return (
    <div className='w-96 mx-auto'>
      <div class="w-full">
        <input
        type="text"
        value={input}
        className="w-full focus:outline-none bg-gray-300 p-4 text-right text-2xl"
        placeholder='0'
        readOnly
        />
      </div>
      <div className="grid grid-cols-4 py-2"> 
        {['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'].map((char)=>(
          <button key={char} onClick={()=> char === '=' ? handleEqual():handleInputValue(char)} className="bg-blue-500 text-white p-4 rounded m-2 focus:outline-none">
            {char}
          </button>
        ))}
        <button onClick={handleClear} className='col-span-2 bg-red-500 text-white p-4 rounded focus:outline-none'>
          C
        </button>
      </div>
      <div className='mt-4 bg-white p-4 rounded'>
        <h2 className="text-xl mb-2">History</h2>
        <ul className="list-disc list-inside">
          {history.map((item, index)=>(
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calculator;
