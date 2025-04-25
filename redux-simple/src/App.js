import logo from './logo.svg';
import './App.css';
import Interval from './components/Interval';
import Draw from "./components/Draw";
import Sum from "./components/Sum";
import Average from "./components/Average";
import React, {useState} from "react";


function App() {

  const[min,setMin] = useState(1);
  const[max,setMax] = useState(10);
  return (
    <div className="App">
        <h1>Exercises React-Redux(Simple)</h1>

        <div className='linha'>
          <Interval min={min} max={max} onMinChange={setMin} onMaxChange={setMax}/>
        </div>

        <div className='linha'>
          <Draw min={min} max={max}/>
          <Sum min={min} max={max}/>
          <Average min={min} max={max}/>
        </div>
       
    </div>
  );
}

export default App;
