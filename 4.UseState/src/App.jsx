
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use, useState } from 'react'

function App() {

  //useState : Bir state'in değerini set metodunu kullanarak değiştirdiğinde component yeniden render edilir.

  const [count, setCount] = useState(0);
  console.log("Component render edildi")
  //bir state in setfunc'ınını kullanarak değerini değiştirdiğimizde ,o state'in bulunduğu component her çalıştıırldığında yeniden render edilir.
  return (
    <div>
      <div>{count}</div>
      <div><button onClick={() => setCount(count + 1)}>Arttır</button></div>
      <div><button onClick={() => setCount(count - 1)}>Azalt</button></div>
    </div>
  )

  // const [firstName, setFirstName] = useState('Elif');
  // const [names, setNames] = useState(["Elif", "Emre", "x", "y"])
  // const [userInfo, SetUserInfo] = useState({ username: "eelif123", password: "1234567" })
  // const [show, setShow] = useState(true);
  // console.log(names)
  // const handleChange = () => {
  //   debugger;
  //   setFirstName('Emre')
  // }



  //return (
  // <div>
  //   <div>{firstName}</div>
  //   <div><button onClick={handleChange}>İsmi değiştir</button></div>
  // </div>
  //--------------------------------------
  // <div>
  //   {names.map((name, index) => (
  //     <div key={index}>{name}</div>
  //   ))}
  // </div>
  //--------------------------------------
  // <div>
  //   {userInfo.username} {userInfo.password}
  // </div>
  //-------------------------------------
  // <div>
  //   {show ? <div>{userInfo.username} {userInfo.password}</div> : <div> bilgileri gösterme</div>}
  // </div>
  //)
}

export default App
