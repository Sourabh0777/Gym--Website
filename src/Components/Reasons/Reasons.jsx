import React from "react";
import "./Reasons.css";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="whyus">
      {/* {Reasons Start} */}

      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>

      <div className="right-r">
        <span>Some Reasons</span>
        <div>
          <span className="stroke-text">Why </span>
          <span>Choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
              <span>Over 140 expert coaches</span>
            
          </div>
          <div>
            <img src={tick} alt=""></img>
              <span>Train smarter and faster than before</span>
            
          </div>
          <div>
            <img src={tick} alt=""></img>
              <span>1 free program for new member</span>
            
          </div>
          <div>
            <img src={tick} alt=""></img>
              <span>Reliable Partner</span>
            
          </div>
        </div>
      </div>
      {/* {Reasons End} */}
    </div>
  );
};

export default Reasons;
