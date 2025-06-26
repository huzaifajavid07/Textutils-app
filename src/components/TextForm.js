// text from component

import React, { useState } from "react";

export default function TextForm(props) {
  let [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Upper Case was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    // console.log("Upper Case was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const clear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    text = document.getElementById("myBox");
    text.select();
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleChange = (event) => {
    console.log("onchnage");

    setText(event.target.value);
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  return (
    <>
 <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>        
   <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea
            placeholder="Enter Text Here..."
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#343a40" : "white", // dark gray for dark mode
              color: props.mode === "dark" ? "white" : "black",
              border: "1px solid black",
            }}
            value={text}
            onChange={handleChange}
            id="myBox"
            rows="6"
          ></textarea>
        </div>

        <div className="btn btn-primary my-4 " onClick={handleUpClick}>
          Convert to Upper Case
        </div>
        <div className="btn btn-primary my-4 mx-2" onClick={handleLoClick}>
          Convert to Lower Case
        </div>
        <button type="submit" onClick={speak} className="btn btn-primary">
          Speak
        </button>
        <button
          type="submit"
          onClick={handleCopy}
          className="btn btn-primary mx-2"
        >
          Copy Text
        </button>
        <button
          type="submit"
          onClick={handleExtraSpaces}
          className="btn btn-primary"
        >
          Remove Extra Spaces
        </button>
        <button type="submit" onClick={clear} className="btn btn-primary mx-2">
          Clear Text
        </button>
      </div>

      <div className="container my-4"  style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h2>Your Text Summary here</h2>
        <p>
          {wordCount} Words and {text.length} Character
        </p>
        <p>{0.008 * text.split().length} Mintues to Read</p>
        <h2>Click to Preview Text</h2>
        <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
