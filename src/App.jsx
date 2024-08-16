import "./App.css";
import Card from "./Components/Card";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [phrase, setPhrase] = useState("");

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangePhrase = (event) => {
        setPhrase(event.target.value);
  };

  const handleShow = (event) => {
    event.preventDefault();
    if (name.length > 3 && phrase.length > 6) {
      setShow(true);
      setError(false);
      reset();
    }else{
      setError(true);
      setShow(false);
    }
  };

  const reset = () => {
    setName("");
    setPhrase("");
  }

  return (
    <div className="App">
      <h1>Vibra Bonito</h1>
      <form>
        <label>Nombre</label>
        <input type="text" value={name} onChange={handleChangeName} />
        <label>Frase</label>
        <input type="text" value={phrase} onChange={handleChangePhrase} />
        <Button onClick={handleShow}>Show</Button>
      </form>
      {show ?  
      <Card name={name} phrase={phrase} /> : null 
      }
      {error ? <p style={{color:'red'}}>Por favor chequea que la información sea correcta</p> : null}
    </div>
  );
}

export default App;
