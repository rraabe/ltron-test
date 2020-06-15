import React, { useState } from "react";
import { parse } from "parse-usdl";
import "./App.css";

const App = () => {
  const [data, setData] = useState("");

  // const handleInput = (event) => {
  //   event.preventDefault();
  //   console.log(event)
  //   setData(event.target.value);
  // }

 
  const handleSubmit = (event) => {
    event.preventDefault();
    // const value = parse(code2, options);
    // console.log(JSON.stringify(value, null, 2));
    // console.log(code2)
  };

  const handleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "ArrowDown") {
      let value = data + "\n";
      setData(value);
    } else if (e.key === "Enter") {
      let value = data + "\r";
      setData(value);
    } else if (e.key === "Shift" || e.key === "F9") {
      return null;
    } else if (e.key === "Backspace") {
      let value = data.slice(0, -1);
      setData(value);
    } else {
      let value = data + e.key;
      setData(value);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input autoFocus onKeyDown={handleKeyPress} type="text" value={data} />
      </form>
      <p>Your input: </p>
      <p>{data}</p>
      <p>Your parsed input:</p>
      <div>{JSON.stringify(parse(data), null, 2)}</div>
    </div>
  );
};

export default App;
