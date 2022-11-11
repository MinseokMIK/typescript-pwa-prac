import React from 'react';
import Greetings from './Greetings';
import logo from './logo.svg';
import './App.css';

function App() {
    const onClick = (name :string) => {
      console.log(`${name} says hello`);
    };
  return (
    <Greetings name='Hello' onClick={onClick}/>
  );
};

export default App;
