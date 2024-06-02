import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export function NumInput({ icon, name, label, onValueChange, reset }) {
  const [num, setNum] = useState(0);
  const [inputState, setInputState] = useState(false);

  const handleChange = (e) => {
    const newNum = e.target.value;
    if (newNum.match(/^\d*$/) || newNum === "") {
      setNum(newNum);
    } else {
      setNum(0);
    }
  };

  const handleFocus = () => {
    setInputState(true);
  };

  const handleBlur = () => {
    setInputState(false);
  };

  useEffect(() => {
    onValueChange(num);
  }, [num, onValueChange]);

  useEffect(() => {
    setNum(0);
  }, [reset]);

  return (
    <>
      <div className="w-full">
        <label className="text-[#5e7a7d]" htmlFor={name}>
          {label}
        </label>

        <br className="mb-[5px]" />
        <span
          className={`w-full bg-slate-200 border  inset-1 flex p-2  ${
            inputState && num == 0
              ? "border-red-400 border-[3px]"
              : "border-slate-500 border-opacity-10"
          }  rounded-md text-[#7f9c9f] `}
        >
          <img className="h-[17px] mt-[7px] ml-[10px] " src={icon} alt="icon" />
          <input
            className=" w-full remove-arrow border-0 bg-slate-200 focus:outline-none text-right h-[30px] text-[#00494d] text-[24px] pr-[10px]"
            placeholder="0"
            id={name}
            type="text"
            name={name}
            value={num === 0 ? "" : num}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </span>
      </div>
    </>
  );
}
NumInput.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  labelError: PropTypes.string,
  onValueChange: PropTypes.func,
  reset: PropTypes.bool,
};
