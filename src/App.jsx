import { useState } from "react";
import ColorPicker from "./components/ColorPicker";
import "./app.css";

function App() {
  const colors = ["red", "blue", "green", "yellow", "purple"];
  const [currentColor, setCurrentColor] = useState("");

  return (
    <div className="app-div" style={{ backgroundColor: currentColor || "#f4f4f4" }}>
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} setCurrentColor={setCurrentColor} />
    </div>
  );
}

export default App;