import "./App.css";
import logo from "/images/logo.svg";
import "./index.css";
import PropTypes from "prop-types";
import iconDollar from "/images/icon-dollar.svg";
import iconPerson from "/images/icon-person.svg";
import { TipInput } from "./components/TipInput";
import { TipButton } from "./components/TipButton";
import { UserInput } from "./components/UserInput";
import { AppOutput } from "./components/AppOutput";
import { useState } from "react";

function App() {
  const [perValue, setPerValue] = useState("");
  const [numBill, setNumBill] = useState("");
  const [numPeeps, setNumPeeps] = useState("");

  const handlePerValueChange = (newValue) => {
    setPerValue(newValue);
  };

  const handleNumChange = (newNumBill) => {
    setNumBill(newNumBill);
  };

  const handleUserChange = (newNumPeeps) => {
    setNumPeeps(newNumPeeps);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(perValue);
    console.log(perValue);
    console.log(numBill);
    console.log(numPeeps);
  };

  const handleReset = () => {
    
  };

  return (
    <div className="max-w-[920px] flex flex-col h-[700px] md:max-w-[375px]
    md:h-screen md:mt-[180px]">
      <div className="logo flex justify-center items-center ">
        <img src={logo} alt="logo" />
      </div>
      <main className=" w-[920px] font-SpaceMono flex flex-col justify-center items-center mt-[90px] h-[480px] bg-[#f4fafa] rounded-3xl md:h-auto md:w-auto md:mt-[40px]">
        <div className="card grid grid-cols-2 gap-8 px-[48px] w-full h-ful md:grid-cols-1 md:px-[30px]">
          <section className="input h-[480px] w-[380px] py-[44px] md:w-auto md:py-[36px]">
            <form className="h-full" onChange={handleSubmit}>
              <TipInput
                icon={iconDollar}
                name="bill"
                label="Bill"
                onValueChange={handleNumChange}
                onHandleReset={handleReset}
              />

              <label
                className="block mt-[40px] mb-[15px] text-[#5e7a7d]"
                htmlFor="tip"
              >
                Select Tip %
              </label>
              <div
                className="tip grid grid-cols-3 grid-rows-2 gap-[15px] mb-[39px] md:grid-cols-2 md:grid-rows-3"
                id="tip"
              >
                <TipButton
                  rowStart="row-start-1"
                  rowStart2='row-start-1'
                  percent="5"
                  perValue={perValue}
                  onValueChange={handlePerValueChange}
                />
                <TipButton
                  // rowStart="row-start-1"
                  rowStart2='row-start-1'
                  percent="10"
                  perValue={perValue}
                  onValueChange={handlePerValueChange}
                />
                <TipButton
                  rowStart="row-start-1"
                  rowStart2='row-start-2'
                  percent="15"
                  perValue={perValue}
                  onValueChange={handlePerValueChange}
                />
                <TipButton
                  rowStart="row-start-2"
                  rowStart2='row-start-2'
                  percent="25"
                  perValue={perValue}
                  onValueChange={handlePerValueChange}
                />
                <TipButton
                  rowStart="row-start-2"
                  rowStart2='row-start-3'
                  percent="50"
                  perValue={perValue}
                  onValueChange={handlePerValueChange}
                />
                <UserInput
                  rowStart="row-start-2"
                  rowStart2='row-start-3'
                  // perValue={perValue}
                  onValueChange={handlePerValueChange}
                />
              </div>
              <TipInput
                icon={iconPerson}
                name="people"
                label="Number of People"
                labelError="Can't be zero"
                onValueChange={handleUserChange}
                onHandleReset={handleReset}
              />
            </form>
          </section>
          <section className="output flex flex-col h-[420px] w-[410px] bg-[#00494d] pl-[40px] pr-[40px] py-[43px] m-auto rounded-2xl md:w-full md:h-auto md:mb-[30px] md:p-[20px]">
            <AppOutput
              type="Tip Amount"
              formula={(numBill && perValue && numPeeps
                ? (numBill * perValue) / numPeeps
                : 0
              ).toFixed(2)}
            />
            <AppOutput
              type="Total"
              formula={(numBill && perValue && numPeeps
                ? (numBill * perValue + Number(numBill)) / numPeeps
                : 0
              ).toFixed(2)}
            />
            <form className="mt-[96px] md:mt-[60px]">
              <button
                className=" flex justify-center items-center m-auto h-[45px] w-full rounded-md uppercase text-[20px] bg-[#26c0ab] hover:bg-[#26c0ab] hover:opacity-80"
                type="submit"
              >
                Reset
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

App.propTypes = {
  perValue: PropTypes.number,
};
