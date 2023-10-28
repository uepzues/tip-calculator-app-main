import PropTypes from "prop-types";
import { useEffect, useState } from "react";
export function TipInput({ icon, name, label, labelError, onValueChange }) {
  const [num, setNum] = useState("");

  const handleChange = (e) => {
    const newNum = e.target.value;
    // console.log(newBill);
    setNum(newNum);
  };

  useEffect(() => {
    onValueChange(num);
  }, [num, onValueChange]);

  return (
    <>
      <div className="w-full">
        <label className="text-[#5e7a7d]" htmlFor={name}>{label}</label>

        {/* {num == 0 ? (<label className="text-[red] inline-block text-right w-1/2 relative" htmlFor={name}>{labelError}</label>) : null} */}
        
        <br className="mb-[5px]"/>
        <span className={`w-full bg-slate-200 border  inset-1 flex p-2  ${num==0 ? ('border-red-400 border-[3px]'): ('border-slate-500 border-opacity-10')}  rounded-md text-[#7f9c9f]`}>
          <img className="h-[17px] mt-[7px] ml-[10px] " src={icon} alt="icon" />
          <input
            className=" w-full remove-arrow border-0 bg-slate-200 focus:outline-none text-right h-[30px] text-[#00494d] text-[24px] pr-[10px]"
            id={name}
            type="number"
            name={name}
            value={num}
            onChange={handleChange}
          />
        </span>
      </div>
    </>
  );
}
TipInput.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  labelError: PropTypes.string,
  onValueChange: PropTypes.func,
};
