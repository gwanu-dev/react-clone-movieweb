import Button from "./Button";
import styles from "./App.module.css"
import { useState } from 'react';

function App() {

  const [counter, setValue] = useState(0);

  const onClick = () => setValue(prev => prev + 1);
  console.log("render");

  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button text="Click me" onClick={onClick} on></Button>
    </div>
  );
}

export default App;
