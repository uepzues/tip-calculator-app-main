import { useState } from "react";
import PropTypes from "prop-types";

export function UserInput({ onValueChange }) {
  const placeholder = "Custom";
  const [isEditing, setIsEditing] = useState(false);
  const [tip, setTip] = useState("");

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onValueChange(tip / 100);
  };

  const handleChange = (event) => {
    setTip(event.target.value);
    // console.log(text)
  };

  return (
    <div className=" border" onClick={handleClick}>
      {isEditing ? (
        <input
          name="tipUserInput"
          type="text"
          value={`${tip}`}
          onBlur={handleBlur}
          onChange={handleChange}
          autoFocus
        />
      ) : (
        <div className="text-center text-[26px] text-[#5e7a7d] leading-[1.7] cursor-pointer"  value={tip}>
          {tip || placeholder}
        </div>
      )}
    </div>
  );
}

UserInput.propTypes = {};

UserInput.propTypes = {
  onValueChange: PropTypes.func.isRequired,
};
