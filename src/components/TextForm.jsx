import { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
  function toUpper() {
    setText(text.toUpperCase());
  }
  function toLower() {
    setText(text.toLowerCase());
  }
  function removeSpace() {
    const temp = text.replace(/\s+/g, " ").trim();
    setText(temp);
  }

  const { theme } = props;
  let style = `btn btn-${theme === "light" ? "primary" : theme}`;
  let textAreaStyle = {
    backgroundColor: `${theme === "light" ? "" : "#343a40"}`,
    color: `${theme === "light" ? "" : "#FFFFFF"}`
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
            style={textAreaStyle}
          ></textarea>
        </div>
        <button className={style} onClick={toUpper}>
          All UPPERCASE
        </button>
        <button className={`${style} mx-2`} onClick={toLower}>
          All lowercase
        </button>
        <button className={style} onClick={removeSpace}>
          Remove Extra Spaces
        </button>
        <button
          className={`${style} mx-2`}
          onClick={() => {
            setText("");
          }}
        >
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          words : {text === "" ? 0 : text.split(" ").length} and characters :{" "}
          {text.length}{" "}
        </p>
      </div>
    </>
  );
}

export default TextForm;
