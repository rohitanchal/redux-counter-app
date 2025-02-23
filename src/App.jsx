import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.count );
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px', border: '2px solid grey', borderRadius: '20px', padding: '25px' }}>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button style={{marginLeft: '15px', marginRight: '15px'}} onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </>
  )
}

export default App
