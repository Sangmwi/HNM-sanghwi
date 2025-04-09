import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, setIsLoggedIn, onSearch, initialSearchQuery }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery || '');
  const navigate = useNavigate();

  useEffect(() => {
    setSearchQuery(initialSearchQuery || '');
  }, [initialSearchQuery]);

  const menuList = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "Home",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    setIsSearchVisible(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="login-button-div">
        {isLoggedIn ? (
          <button onClick={handleLogout}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그아웃</span>
          </button>
        ) : (
          <Link to="/login">
            <button>
              <FontAwesomeIcon icon={faUser} />
              <span>로그인</span>
            </button>
          </Link>
        )}
      </div>
      <div className="logo">
        <Link to="/">
          <img 
            src="https://images.seeklogo.com/logo-png/6/2/hm-logo-png_seeklogo-64496.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="menu-and-search">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <form className="search-form" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="검색" 
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <div className="search-div-media">
          <div className="search-icon" onClick={toggleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
      <form className={`search-form-mobile ${isSearchVisible ? 'active' : ''}`} onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="검색" 
          value={searchQuery}
          onChange={handleSearchChange}
          autoFocus
        />
        <button type="button" onClick={toggleSearch}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </form>
    </div>
  );
};

export default Navbar;
