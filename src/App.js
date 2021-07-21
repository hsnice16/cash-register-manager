import React, { useState } from "react";
import "./styles.css";

import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

export default function App() {
  const initialVal = {
    "2000": "",
    "500": "",
    "100": "",
    "20": "",
    "10": "",
    "5": "",
    "1": ""
  };

  const [noOfNotes, setNoOfNotes] = useState(initialVal);

  const [showSectionThree, setShowSectionThree] = useState(false);

  return (
    <div className="App">
      <div className="AppFirstSection">
        <SectionOne />
        <SectionTwo
          initialVal={initialVal}
          setNoOfNotes={setNoOfNotes}
          showSectionThree={showSectionThree}
          setShowSectionThree={setShowSectionThree}
        />
      </div>
      {showSectionThree && <SectionThree noOfNotes={noOfNotes} />}
    </div>
  );
}
