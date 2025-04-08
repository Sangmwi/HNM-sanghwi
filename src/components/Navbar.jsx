import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const menuList = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "Home",
  ];

  return (
    <div>
      <div className="login-button-div">
        <button>
          <FontAwesomeIcon icon={faUser} className="login-icon" />
          <span>로그인</span>
        </button>
        <div className="search-div-media">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="검색" />
        </div>
      </div>
      <div className="logo">
        <img onClick={() => navigate("/")}
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
        <div className="search-div">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="검색" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
