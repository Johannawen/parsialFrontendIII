import "./App.css";
import Card from "./Components/Card";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "",
    phrase: "",
  });
  
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeName = (event) => {
    setUser({...user, name: event.target.value});
      setShow(false);
  };

  const handleChangePhrase = (event) => {
       setUser({...user, phrase: event.target.value});
      setShow(false);
  };

  const handleShow = (event) => {
    event.preventDefault();
    if (user.name.trim() === user.name && user.name.length > 3 && user.phrase.length > 6) {
      setShow(true);
      setError(false);
    }else{
      setError(true);
      setShow(false);
    }
  };

  return (
    <div className="App">
      <h1>Vibra Bonito</h1>
      <form className="form">
        <label> Nombre </label>
        <input type="text" value={user.name} onChange={handleChangeName} />
        <label> Frase </label>
        <input type="text" value={user.phrase} onChange={handleChangePhrase} />
        <Button onClick={handleShow}>Show</Button>
      </form>
      {show ?  
      <Card name={user.name} phrase={user.phrase} onChange={handleShow} /> : null 
      }
      {error ? <p style={{color:'red'}}>Por favor chequea que la información sea correcta</p> : null}
    </div>
  );
}

export default App;
