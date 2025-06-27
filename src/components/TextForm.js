// text from component

import React, { useState } from "react";
import { useEffect } from "react";

export default function TextForm(props) {
  useEffect(() => {
    document.title = "Home - TextUtils";
  }, []);

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
    
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-3 w-100">{props.heading}</h1>
        <div className="form-group">
          <textarea
            placeholder="Enter Text Here..."
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white", // dark gray for dark mode
              color: props.mode === "dark" ? "white" : "black",
              border: "1px solid black",
            }}
            value={text}
            onChange={handleChange}
            id="myBox"
            rows="6"
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-2"
          onClick={clear}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-2"
          onClick={speak}
        >
          Speak
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {wordCount} Words and {text.replace(/\s/g, "").length} Character
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Mintues to Read
        </p>
        <h2>Preview Text</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to Preview!"}
        </p>
      </div>
    </>
  );
}
