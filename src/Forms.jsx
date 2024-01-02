import { useState } from "react";

const Forms = ({ addColor }) => {
  const [color, setColor] = useState("");
  const handleChange = (e) => {
    setColor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input type="color" onChange={handleChange} value={color} />
        <input
          type="text"
          name=""
          id=""
          value={color}
          onChange={handleChange}
          placeholder="#f1550"
        />
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: color }}
        >
          Submit
        </button>
      </form>
      {console.log(color)}
    </section>
  );
};
export default Forms;
