import React from "react";

import ms1 from "../../assets/Images/MS/Mscroll1P.png";
import ms2 from "../../assets/Images/MS/Mscroll2P.png";
import ms3 from "../../assets/Images/MS/Mscroll3P.png";

export const Machine = ({ ms1Rotate, ms2Rotate, ms3Rotate }) => {
  return (
    <>
      <div>
        <img
          className="ms1 w-11 h-11"
          style={{ transform: `rotate(${ms1Rotate}deg)` }}
          src={ms3}
        />
        <img
          className="ms2 absolute w-9 h-9 top-14 left-5"
          style={{ transform: `rotate(${-ms2Rotate}deg)` }}
          src={ms2}
        />
        <img
          className="ms3 w-7 h-7 mx-auto my-7"
          style={{ transform: `rotate(${ms3Rotate}deg)` }}
          src={ms1}
        />
      </div>
    </>
  );
};
