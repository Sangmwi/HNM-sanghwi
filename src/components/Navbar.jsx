import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({
  isLoggedIn,
  setIsLoggedIn,
  onSearch,
  initialSearchQuery,
}) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery || "");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchQuery(initialSearchQuery || "");
  }, [initialSearchQuery]);

  const menuList = ["Women", "Men", "Baby", "Kids", "Home"];

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="top-bar">
        <div className="left-side">
          <div className={`mobile-menu-list slide-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <ul>
              {menuList.map((menu, index) => (
                <li key={index}>{menu}</li>
              ))}
            </ul>
          </div>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div className="right-side">
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
            <div className="search-div-media">
              <div className="search-icon" onClick={toggleSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="logo">
        <Link to="/">
          <img
            src="https://atelierbundi.ch/wp-content/uploads/2016/06/Logo-SHS-architects-Bundi.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="desktop-menu-list menu-and-search">
        <ul>
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
      </div>
      <form
        className={`search-form-mobile ${isSearchVisible ? "active" : ""}`}
        onSubmit={handleSearch}
      >
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
    </nav>
  );
};

export default Navbar;
