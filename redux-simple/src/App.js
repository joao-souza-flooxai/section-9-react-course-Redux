import logo from './logo.svg';
import './App.css';
import Interval from './components/Interval';
import Draw from "./components/Draw";
import Sum from "./components/Sum";
import Average from "./components/Average";
import React from "react";


function App() {

  return (
    <div className="App">
        <h1>Exercises React-Redux(Simple)</h1>

        <div className='linha'>
          <Interval/>
        </div>

        <div className='linha'>
          <Draw />
          <Sum />
          <Average/>
        </div>
       
    </div>
  );
}

export default App;
