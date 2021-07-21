import React, { useState } from "react";

export default function SectionTwo({
  initialVal,
  setNoOfNotes,
  showSectionThree,
  setShowSectionThree
}) {
  const [billAmt, setBillAmt] = useState("");
  const [cashGiven, setCashGiven] = useState("");
  const [visibleSecondInput, setVisibleSecondInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleBillAmtChange = (event) => {
    if (errorMessage) setErrorMessage("");
    if (successMessage) setSuccessMessage("");
    if (showSectionThree) setShowSectionThree(false);

    setBillAmt(event.target.value);
  };

  const handleCashGivenChange = (event) => {
    if (errorMessage) setErrorMessage("");
    if (successMessage) setSuccessMessage("");
    if (showSectionThree) setShowSectionThree(false);

    setCashGiven(event.target.value);
  };

  const handleNextBtnClick = () => {
    if (Number(billAmt) <= 0) setErrorMessage("Enter valid bill amount");
    else setVisibleSecondInput(true);
  };

  const handleCheckBtnClick = () => {
    if (Number(billAmt) <= 0 || Number(cashGiven) <= 0) {
      setErrorMessage("Enter valid bill amount and cash given to Continue");
      return;
    }

    if (Number(cashGiven) < Number(billAmt)) {
      setErrorMessage("Cash is less than bill, please enter right amount");
      return;
    }

    setNoOfNotes(initialVal);

    let amtToReturn = Number(cashGiven) - Number(billAmt);

    if (amtToReturn === 0) {
      setSuccessMessage("No amount should be returned");
    } else {
      setSuccessMessage(`Return : ₹${amtToReturn}`);

      const notesArray = [2000, 500, 100, 20, 10, 5, 1];
      for (let noteVal of notesArray) {
        if (amtToReturn >= noteVal) {
          let noOfNote = Math.trunc(amtToReturn / noteVal);
          setNoOfNotes((prevState) => ({ ...prevState, [noteVal]: noOfNote }));
          amtToReturn -= noOfNote * noteVal;
        }
        if (amtToReturn === 0) break;
      }

      setShowSectionThree(true);
    }
  };

  return (
    <div className="SectionTwo">
      <div>
        <label htmlFor="bill-amount">Bill Amount&nbsp;&nbsp;:&nbsp;</label>
        <input
          type="number"
          id="bill-amount"
          placeholder="enter..."
          min="0"
          value={billAmt}
          onChange={handleBillAmtChange}
        />
      </div>
      {visibleSecondInput && (
        <div>
          <label htmlFor="cash-given">Cash Given&nbsp;:&nbsp;</label>
          <input
            type="number"
            id="cash-given"
            placeholder="enter..."
            min="0"
            value={cashGiven}
            onChange={handleCashGivenChange}
          />
        </div>
      )}
      {visibleSecondInput === false && (
        <button type="button" onClick={handleNextBtnClick}>
          next
        </button>
      )}
      {visibleSecondInput && (
        <button type="button" onClick={handleCheckBtnClick}>
          check{" "}
        </button>
      )}
      {errorMessage && <div className="ErrorDiv">{errorMessage}</div>}
      {successMessage && <div className="SuccessDiv">{successMessage}</div>}
    </div>
  );
}
