import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

export default function App() {
  const [theme, setTheme] = useState("light");
  const darkStyle = {
    backgroundColor: "#343a40",
    color: "white",
    position: "fixed",
    bottom: 0,
    right: 0,
    left: 0,
    top: 0
  };
  const lightStyle = {};

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div style={theme === "light" ? lightStyle : darkStyle}>
      <Navbar
        theme={theme}
        onClick={changeTheme}
        title="Text Utilities"
        aboutText="About"
      />

      <div className="container my-3">
        <button
          type="button"
          className={theme === "light" ? "btn btn-primary" : "btn btn-dark"}
          onClick={changeTheme}
        >
          Enable {theme === "dark" ? "Light" : "Dark"} Theme
        </button>
      </div>
      <div className="container my-3">
        <TextForm heading="Enter you text to analyse" theme={theme} />
      </div>
    </div>
  );
}
