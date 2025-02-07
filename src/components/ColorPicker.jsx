import PropTypes from "prop-types";

function ColorPicker({ colors, setCurrentColor }) {
  return (
    <div className="color-picker">
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => setCurrentColor(color)}
          className="color-button"
        >
          {color}
        </button>
      ))}
      <button className="reset" onClick={() => setCurrentColor("")}>
        Reset
      </button>
    </div>
  );
}

ColorPicker.propTypes = {
  colors: PropTypes.array.isRequired,
  setSelectedColor: PropTypes.func.isRequired,
};

export default ColorPicker;