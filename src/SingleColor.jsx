import { toast } from "react-toastify";
const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color Copied To Clipboard");
      } catch {
        toast.error("Failed To Copy To Clipboard");
      }
    } else {
      toast.error("Clipboard Access Not Available");
    }
  };
  return (
    <article
      className={index > 17 ? "color color-light" : "color"}
      style={{ backgroundColor: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
export default SingleColor;
