import React from "react";
import { useState } from "react";

function App() {

  setInterval(atualizarHora, 1000)

  const agora = new Date().toLocaleTimeString()

  const [hora, setHora] = useState(agora);

  function atualizarHora() {
    const novaHora = new Date().toLocaleTimeString()
    setHora(novaHora)
  }

  return (
    <div className="container">
      <div>
        <h1 className="frase"> Don't waste your Time!</h1>
        <h1 className="horas"> {hora} </h1>
      </div>
    </div>
  )
}
export default App;