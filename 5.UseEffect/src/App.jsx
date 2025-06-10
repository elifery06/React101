import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log("her zmaan çalışır")
  })
  useEffect(() => {
    console.log("ilk render edildiğinde çalışır")
    //veritabanından ürünleri getir ve listele
  }, [])

  useEffect(() => {
    console.log("ilk render edildiğinde FİRSTNAME ve LASTNAME state  değerleri değiştiğinde çalışır")
  }, [firstName, lastName])
  // useEffect(() => {
  //   console.log("ilk render edildiğinde vee LASTNAME state değeri değiştiğinde çalışır")
  // }, [lastName])
  return (
    <div>
      <div><button onClick={() => setFirstName("Emre")}>Adı değiştir</button></div>
      <div><button onClick={() => setLastName("x")}>Soyismi değiştir</button></div>
    </div>
  )
}

export default App
