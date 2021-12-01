import React, { useState } from 'react'
import './App.css';

function App() {
  const [color, setColor] = useState('')
  return (
    <div className={`react-root ${color}`}>
      <div className='centered'>
        <h1>Color Picker</h1>
        {color}
        <button className='red' onClick={() => setColor('red')}>Red</button>
        <button className='blue' onClick={() => setColor('blue')}>Blue</button>
        <button className='yellow' onClick={() => setColor('yellow')}>Yellow</button>
      </div>
    </div>
  );
}

export default App;
