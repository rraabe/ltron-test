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

  const options = {
    suppressErrors: false,
  };
  const code = `@\n\rANSI 636024070001DL00310247DLDAQ53152244\nDCSRAABE\nDDEN\nDACRICHARD\nDDFN\nDADC\nDDGU\nDCAD\nDCBNONE\nDCDNONE\nDBD02012018\nDBB01031985\nDBA01032022\nDBC2\nDAU070 in\nDAYHAZ\nDAG17 HENRY STREET\nDAIBURLINGTON\nDAJVT\nDAK054010000  \nDCF190753152244\nDCGUSA\nDAW170\nDAHNONE\nDDAF\nDDB02202013\nDDK1\r\r\r\n`;
  const code2 = `@
ANSI 636024070001DL00310247DL
DAQ53152244
DCSRAABE
DDEN
DACRICHARD
DDFN
DADC
DDGU
DCAD
DCBNONE
DCDNONE
DBD02012018
DBB01031985\nDBA01032022
DBC2DAU070 in
DAYHAZ
DAG17 HENRY STREET
DAIBURLINGTON
DAJVT
DAK054010000  
DCF190753152244
DCGUSA
DAW170
DAHNONE
DDAF
DDB02202013
DDK1
\r
\r
\r
`;
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
      <div>{JSON.stringify(parse(data), null, 2)}</div>
    </div>
  );
};

export default App;
