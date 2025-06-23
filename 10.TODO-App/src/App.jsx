import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TodoCreate />
    </div>
  )
}

export default App
