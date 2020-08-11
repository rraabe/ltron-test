import { parse } from "parse-usdl";
//or
//const dlParse = require("parse-usdl"); 
//and use dlParse.parse() (or similar)

//Send onkeydown events to this function to be parsed. It will return the correct string value. Concatenate all the returned values.
const handleScannerKeyboardInput = (event) => {
  if (event.key === "ArrowDown") {
    return "\n";
  } else if (event.key === "Enter") {
   return "\r";
  } else if (event.key === "Shift" || event.key === "F9") {
    return null;
  } else {
    return event.key;
  }
};

//Then send the concatenated string to parseDL and it will return the formatted JSON object
const parseDL = (string) => {
 return JSON.stringify(parse(string), null, 2)
}