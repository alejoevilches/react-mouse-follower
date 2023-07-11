import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [enabled, setEnabled]=useState(false);

  const handleClick=()=>{
    setEnabled(!enabled);
  }

  useEffect(()=>{
    console.log("efecto")
  });
  return (
    <>
      <h1>Proyecto 3</h1>
      <button onClick={handleClick}>{enabled ? "Activar tracking" : "Desactivar tracking"}</button>
    </>
  )
}

export default App
