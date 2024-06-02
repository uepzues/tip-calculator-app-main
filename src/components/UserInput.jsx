import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function UserInput({ onValueChange, reset }) {
  const placeholder = "Custom";
  const [isEditing, setIsEditing] = useState(false);
  const [tip, setTip] = useState(0);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onValueChange(parseInt(tip) / 100);
  };

  const handleChange = (event) => {
    setTip(event.target.value);
  };

  useEffect(() => {
    setTip(0);
  }, [reset]);

  return (
    <div className=" border appearance-none" onClick={handleClick}>
      {isEditing ? (
        <input
          name="tipUserInput"
          type="number"
          value={tip}
          onBlur={handleBlur}
          onChange={handleChange}
          autoFocus
        />
      ) : (
        <div
          className="text-center text-[26px] text-[#5e7a7d] leading-[1.7] cursor-pointer md:w-full "
          value={tip}
        >
          {tip || placeholder}
        </div>
      )}
    </div>
  );
}

UserInput.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  reset: PropTypes.bool,
};
