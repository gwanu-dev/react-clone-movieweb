import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from 'react';


function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    //toDos = "" DONT EVER MODIFY THE VALUE/STATE DIRECTLY!!!
    // WE DO MODIFY THE VALUE BY THE FUNCTION!!
    setToDos(currentState => [toDo, ...currentState]);
    console.log(toDo);
  }
  return (
    <div>
      <h1>MY DO TOS ({toDos.length})</h1>
      {toDos.map((a, i) => { return <h3>{toDos[i]}</h3> })}
      < form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do ..." />
        <button>Add To Do</button>
      </form>
    </div >
  );
}

export default App;
