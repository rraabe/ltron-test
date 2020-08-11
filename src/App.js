import React, { useState, useEffect } from "react";
// import { parse } from "parse-usdl";
import "./App.css";
import vinDecoder from "vin-decode";
const parse = require("parse-usdl");
const axios = require("axios");
const vindec = require("vindec");

const App = () => {
  const [data, setData] = useState("");
  const [vin, setVin] = useState("JF2SJAXC3GH434325");
  const [vinDecoded, setVinDecoded] = useState("");
  // const handleInput = (event) => {
  //   event.preventDefault();
  //   console.log(event)
  //   setData(event.target.value);
  // }
  // axios
  //   .get(
  //     `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${vin}?format=json`
  //   )
  //   .then((response) => console.log(response.data.Results[0]))
  //   .catch((err) => console.log(err));
  // axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/440?format=json")
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  // axios.get()
  // console.log(`Valid: ${vindec.validate('JF2SJAXC3GH434325')}`)
  // console.log(vindec.decode('JF2SJAXC3GH434325'))
  // console.log(vinDecoder('JF2SJAXC3GH434325').decode())
  const handleSubmit = (event) => {
    event.preventDefault();
    // const value = parse(code2, options);
    // console.log(JSON.stringify(value, null, 2));
    // console.log(code2)
  };

  const handleKeyPress = (e) => {
    // console.log(e.key);
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

  const [selectedOption, setSelectedOption] = useState("DL");
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleVin = () => {};

  const checkForDevices = () => {
    navigator.usb.getDevices().then((devices) => {
      console.log("Total devices: " + devices.length);
      devices.forEach((device) => {
        console.log(
          "Product name: " +
            device.productName +
            ", serial number " +
            device.serialNumber
        );
      });
    });
  };

  const requestDevice = () => {
    // const filters = [{ vendorId: 0x10ac }];
    navigator.usb
      .requestDevice({ filters: [{  }] })
      .then((usbDevice) => {
        console.log("Product name: " + usbDevice.productName);
      })
      .catch((e) => {
        console.log("There is no device. " + e);
      });
  };

  return (
    <div className="App">
      <button onClick={requestDevice}>Request Device</button>
      <button onClick={checkForDevices}>Check for Device</button>
      <form onSubmit={handleSubmit}>
        <p>Please select your input type:</p>
        <input
          type="radio"
          id="DL"
          name="inputType"
          value="DL"
          checked={selectedOption === "DL"}
          onChange={handleRadioChange}
        />
        <label htmlFor="DL">Driver's License #</label>
        <br />
        <input
          type="radio"
          id="VIN"
          name="inputType"
          value="VIN"
          checked={selectedOption === "VIN"}
          onChange={handleRadioChange}
        />
        <label htmlFor="VIN">VIN</label>
        <br />
        <input autoFocus onKeyDown={handleKeyPress} type="text" value={data} />
      </form>
      <p>Your input: </p>
      <p>{selectedOption === "DL" ? data : vin}</p>
      <p>Your parsed input:</p>
      <div>
        {selectedOption === "DL" ? JSON.stringify(parse.parse(data), null, 2) : "hi"}
      </div>
    </div>
  );
};

export default App;
