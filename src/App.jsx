import { useState } from 'react'
import './App.css'
import Heading from './Components/Heading.jsx'
import Stopwatch from './Components/Stopwatch.jsx'
import Todo from './Components/Todo.jsx'

function App() {

  return (
    <>
      <Heading />
      <Stopwatch />
      <Todo />
    </>
  );
}

export default App
