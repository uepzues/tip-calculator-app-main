import PropTypes from "prop-types";
// import { useState } from "react";
export function TipButton({ percent, rowStart, onValueChange }) {
  // const [perValue, setPerValue] = useState('')

  const handleClick = (e) => {
    let newValue = e.target.value;
    onValueChange(newValue / 100);

    // alert(perValue)
  };

  return (
    <>
      <button
        className={`${rowStart} rounded-lg bg-[#00494d] text-white text-[26px] text-center h-[48px] w-[118px] hover:bg-[#26c0ab] hover:text-[#00494d] focus:bg-[#26c0ab] focus:text-[#00494d]`}
        type="button"
        value={`${percent}`}
        onClick={handleClick}
      >
        {percent}%
      </button>
    </>
  );
}

TipButton.propTypes = {
  percent: PropTypes.string,
  rowStart: PropTypes.string,
  perValue: PropTypes.any.isRequired,
  onValueChange: PropTypes.func.isRequired,
};
