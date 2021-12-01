import React, { useState } from 'react'
import './App.css';
import ColorChangeButton from './ColorChangeButton'

function App() {
  const [color, setColor] = useState('')
  return (
    <div className={`react-root ${color}`}>
      <div className='centered'>
        <h1>Color Picker</h1>
        <ColorChangeButton color='red' setColor={setColor}/>
        <ColorChangeButton color='blue' setColor={setColor}/>
        <ColorChangeButton color='yellow' setColor={setColor}/>
        {/* Commented these instead of deleting so I can refer back! */}
        {/* <button className='red' onClick={() => setColor('red')}>Red</button>
        <button className='blue' onClick={() => setColor('blue')}>Blue</button>
        <button className='yellow' onClick={() => setColor('yellow')}>Yellow</button> */}
      </div>
    </div>
  );
}

export default App;
