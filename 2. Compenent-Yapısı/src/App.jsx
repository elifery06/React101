import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import { users } from './Login'
import Hello from './Hello'
function App() {

  return (
    <div>
      {/* <Login /> */}
      <Hello />
    </div>
  )
}
//export default: hepsini export
//export :sadece bir parçayı export et
export default App
