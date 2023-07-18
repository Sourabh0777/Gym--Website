import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";


const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header"> 
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div style={{
          backgroundColor:'var(--appColor)',
          padding: "0.5rem",
          borderRadius:"5px",
        }}
        onClick={()=>setMenuOpened(true)}
        >
          <img src={Bars} style ={{with:'1.5rem',height:'1.5rem'}}/>
        </div>
      ) : (
        <ul className="header-menu">
          <li ><Link onClick={()=> setMenuOpened(false)} to="homee" span={true} smooth={true}> Home</Link></li>
          <li ><Link onClick={()=> setMenuOpened(false)} to="progr" span={true} smooth={true}> Program</Link></li>
          <li ><Link onClick={()=> setMenuOpened(false)} to="whyus" span={true} smooth={true}> Why us</Link></li>
          <li ><Link onClick={()=> setMenuOpened(false)} to="plans" span={true} smooth={true}> Plans</Link></li>
          <li ><Link onClick={()=> setMenuOpened(false)} to="testi" span={true} smooth={true}> Testimonials</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Header;
