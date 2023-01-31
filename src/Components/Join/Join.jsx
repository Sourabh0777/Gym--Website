import "./Join.css";
import React from "react";

const Join = () => {
  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">ready to </span>
          <span>level up</span>
        </div>
        <div>
          <span>Your Body </span>
          <span className="stroke-text">With up?</span>
        </div>
      </div>
      
      <div className="right-j">
        
        <form action="" className="email-container">
            <input 
            type="email" 
            name="user-email" 
            placeholder="Enter your Email address" 
            />
            <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
