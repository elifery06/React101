import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //js kodları yazılır
  let vize1 = 50
  let vize2 = 60
  return (
    //html kodları yazılır
    <div>
      <p>Ortalama: {(vize1 + vize2) / 2}</p>
    </div>

  )
}

export default App
