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

  const handleReset = (e) => {
    e.preventDefault;
    setPerValue("0");
    setNumBill("0");
    setNumPeeps("0");
  };

  return (
    <div className="max-w-[920px] h-[700px]">
        <div className="logo flex justify-center items-center">
          <img src={logo} alt="logo" />
        </div>
      <main className=" w-[920px] font-SpaceMono flex flex-col justify-center items-center mt-[90px] h-[480px] bg-[#f4fafa] rounded-3xl">
        <div className="card grid grid-cols-2 gap-8 px-[48px] w-full h-ful">
          <section className="input h-[480px] w-[380px] py-[44px]">
            <form className="h-full" onChange={handleSubmit}>
              <TipInput
                icon={iconDollar}
                name="bill"
                label="Bill"
                onValueChange={handleNumChange}
              />

              <label className='block mt-[40px] mb-[15px] text-[#5e7a7d]' htmlFor="tip">Select Tip %</label>
              <div
                className="tip grid grid-cols-3 grid-rows-2 gap-[15px] mb-[39px]"
                id="tip"
              >
                <TipButton
                  rowStart="row-start-1"
                  percent="5"
                  perValue={perValue}
                  onValueChange={handlePerValueChange}
                />
                <TipButton
                  rowStart="row-start-1"
                  percent="10"
                  perValue={perValue}
                  onValueChange={handlePerValueChange}
                />
                <TipButton
                  rowStart="row-start-1"
                  percent="15"
                  perValue={perValue}
                  onValueChange={handlePerValueChange}
                />
                <TipButton
                  rowStart="row-start-2"
                  percent="25"
                  perValue={perValue}
                  onValueChange={handlePerValueChange}
                />
                <TipButton
                  rowStart="row-start-2"
                  percent="50"
                  perValue={perValue}
                  onValueChange={handlePerValueChange}
                />
                <UserInput
                  rowStart="row-start-2"
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
              />
            </form>
          </section>
          <section className="output grid">
            <AppOutput
              type='Tip Amount'
              formula={(numBill && perValue && numPeeps
                ? (numBill * perValue) / numPeeps
                : 0
              ).toFixed(2)}
            />
            <AppOutput
              type='Total'
              formula={(numBill && perValue && numPeeps
                ? (numBill * perValue + Number(numBill)) / numPeeps
                : 0
              ).toFixed(2)}
            />
            <form  onSubmit={handleReset}>
              <button className=" border flex justify-center items-center m-auto h-[40px] w-full" type="submit">Reset</button>
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
