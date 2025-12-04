import { useState, useEffect } from 'preact/hooks'
import './app.css'

export function App() {
  const [a, setA] = useState(0)

  const plusz = () => {
    setA(a + 1)
  }

  const minusz = () => {
    setA(a - 1)
  }

  const [auto, setAuto] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setAuto((szam) => szam + 1)
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [])

  const [text, setText] = useState("")

  useEffect(() => {
    const mentett = localStorage.getItem("szoveg")
    if (mentett) {
      setText(mentett)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("szoveg", text)
  }, [text])


  const valtozas = (e) => {
    setText(e.target.value)
  }


  return (
    <>
      <h1>Számláló</h1>

      <button onClick={plusz}>+</button>
      <p>{a}</p>
      <button onClick={minusz}>-</button>

      <hr />

      <h2>Automata számláló (minden mp nő)</h2>
      <p>{auto}</p>

      <hr />

      <h2>Input figyelés + localStorage</h2>
      <input 
        type="text"
        value={text}
        onInput={valtozas}
      />
      <p>Tárolt érték: {text}</p>
    </>
  )
}
