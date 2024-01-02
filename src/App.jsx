import { useState } from "react";
import ColorList from "./ColorList";
import Forms from "./Forms";
import Values from "values.js";
import { toast, ToastContainer } from "react-toastify";
const App = () => {
  const [colors, setColors] = useState("");
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(5);
      setColors(newColors);
      toast.success("successful");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main>
      <Forms addColor={addColor}></Forms>
      <ColorList colors={colors ? colors : []}></ColorList>
      <ToastContainer position="top-center"></ToastContainer>
    </main>
  );
};
export default App;
