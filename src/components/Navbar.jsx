import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능",
  ];

  return (
    <div>
      <div className="login-button-div">
        <button>
          <FontAwesomeIcon icon={faUser} className="login-icon" />
          로그인
        </button>
      </div>
      <div className="logo">
        <img
          src="https://images.seeklogo.com/logo-png/6/2/hm-logo-png_seeklogo-64496.png"
          alt="logo"
        />
      </div>
      <div className="menu-and-search">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default Navbar;
