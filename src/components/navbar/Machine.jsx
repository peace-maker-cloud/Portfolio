import React from "react";

import ms3 from "../../assets/Images/MS/Mscroll1P.png";
import ms2 from "../../assets/Images/MS/Mscroll2P.png";
import ms1 from "../../assets/Images/MS/Mscroll3P.png";

export const Machine = ({ ms1Rotate, ms2Rotate }) => {
  return (
    <>
      <div>
        <img
          className="ms1 w-11 h-11"
          style={{ transform: `rotate(${ms1Rotate}deg)` }}
          src={ms1}
        />
        <img
          className="ms2 absolute w-9 h-9 top-12 left-5"
          style={{ transform: `rotate(${-ms2Rotate}deg)` }}
          src={ms2}
        />
      </div>
    </>
  );
};
