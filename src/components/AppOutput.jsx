// import iconDollar from "/images/icon-dollar.svg";
import PropTypes from "prop-types";
export function AppOutput({ formula, type }) {
  return (
    <>
      <div className="grid grid-cols-2 items-center mb-[20px] ">
        <div className="">
          <p className="leading-[2] text-[#f4fafa]">{type}</p>
          <p className="text-sm text-[#7f9c9f] ">/ person</p>
        </div>
        <div>
          <h1 className="flex text-[46px] justify-end  font-bold relative text-[#26c0ab]">
            {/* <img
              className="block h-7 justify-self-stretch"
              src={iconDollar}
              alt="dollar icon"
            /> */}
            ${formula}
          </h1>
        </div>
      </div>
    </>
  );
}

AppOutput.propTypes = {
  formula: PropTypes.string,
  type: PropTypes.string
};
