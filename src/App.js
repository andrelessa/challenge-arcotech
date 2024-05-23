import "./styles.css";
import { useState } from "react";

const colors = ["red", "yellow", "green"];

export default function App() {
  const [currentColor, setCurrentColor] = useState();

  const switchColor = (colorName) => {
    setCurrentColor(colorName);
  };

  return (
    <div className="App">
      {colors.map((color) => (
        <div
          className={`${color} ${color === currentColor ? "active" : ""}`}
          key={color}
          onClick={() => switchColor(color)}
        ></div>
      ))}
    </div>
  );
}
