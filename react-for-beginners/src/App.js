import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from 'react';


// useEffect -> call once at the render time
// ( first arg : the function we want to execute only once 
//  second arg : )
function App() {


  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue(prev => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("This console runs all the Time ");

  const RunOnlyOnce = () => {
    console.log("This console runs only once");
  };
  useEffect(RunOnlyOnce,
    []
  );

  useEffect(() => {
    // if (keyword !== "" && keyword.length > 4) {
    //   console.log("Search for", keyword);
    // }
    console.log("I run when 'keyword' changes");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter])
  return (
    <div>
      <input type="text" placeholder="Search here..." onChange={onChange} />
      <h1 className={styles.title}>{counter}</h1>
      <Button text="Click me" onClick={onClick} on></Button>
    </div>
  );
}

export default App;
