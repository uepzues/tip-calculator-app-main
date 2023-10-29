import PropTypes from "prop-types";
// import { useState } from "react";
export function TipButton({ percent, rowStart, onValueChange, rowStart2, colStart }) {
  // const [perValue, setPerValue] = useState('')

  const handleClick = (e) => {
    let newValue = e.target.value;
    onValueChange(newValue / 100);

    // alert(perValue)
  };

  return (
    <>
      <button
        className={`${rowStart} md:${rowStart2} md:${colStart} rounded-lg bg-[#00494d] text-white text-[26px] text-center h-[48px] w-[118px] hover:bg-[#26c0ab] hover:text-[#00494d] focus:bg-[#26c0ab] focus:text-[#00494d] md:w-full`}
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
  rowStart2: PropTypes.string,
  colStart:PropTypes.string,
  perValue: PropTypes.any.isRequired,
  onValueChange: PropTypes.func.isRequired,
};
