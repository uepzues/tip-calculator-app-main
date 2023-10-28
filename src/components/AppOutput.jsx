import iconDollar from "/images/icon-dollar.svg";
import PropTypes from "prop-types";
export function AppOutput({ formula, type }) {
  return (
    <>
      <div className="grid grid-cols-2 items-center">
        <div>
          <p>{type}</p>
          <p>/ person</p>
        </div>
        <div>
          <h1 className="text-4xl text-right">
            <img
              className="inline-block h-6 pb-1"
              src={iconDollar}
              alt="dollar icon"
            />
            {formula}
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
