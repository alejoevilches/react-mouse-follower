import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [enabled, setEnabled]=useState(false);
  const [position, setPosition]=useState({x:0,y:0});

  const handleClick=()=>{
    setEnabled(!enabled);
  }

  useEffect(()=>{
    const handleMove=(e)=>{
      const {clientX, clientY}=e;
      setPosition({ x: clientX, y: clientY });
    }
    enabled
    ? window.addEventListener("pointermove", handleMove)
    : window.removeEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };

  },[enabled]);
  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={handleClick}>{enabled ? "Desactivar tracking" : "Activar tracking"}</button>
    </>
  )
}

export default App
