import "./App.css";
import Card from "./Components/Card";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  const [friend, setFriend] = useState({ name: "", phrase: "" });

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
    if (friend.name.trim.length > 3 && friend.phrase.length > 6) {
      setShow(true);
      setError(false);
      reset();
    } else {
      setError(true);
      setShow(false);
    }
  };

  const reset = () => {
    setFriend({ name: "", phrase: "" });;
  };

  return (
    <div className="App">
      <h1>Vibra Bonito</h1>
      <form>
        <label>Nombre</label>
        <input type="text" value={friend.name} onChange={handleChangeName} />
        <label>Frase</label>
        <input type="text" value={friend.phrase} onChange={handleChangePhrase} />
        <Button onClick={handleShow}>Show</Button>
      </form>
      {show ? <Card name={friend.name} phrase={friend.phrase} /> : null}
      {error ? (
        <p style={{ color: "red" }}>
          Por favor chequea que la información sea correcta
        </p>
      ) : null}
    </div>
  );
}

export default App;
