import React from "react";
import { Link, useHistory } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { useGlobalContext } from "../context/context";

const Navbar = () => {
  const {
    searchOpen,
    setSearchOpen,
    isHome,
    setSearchTerm,
  } = useGlobalContext();
  const searchValue = React.useRef();

  const history = useHistory();

  const navigateHome = () => {
    history.push("/");
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  const searchVideo = () => {
    if (isHome) {
      setSearchTerm(searchValue.current.value);
      if (searchOpen) {
        closeSearch();
      }
    }
    if (!isHome) {
      setSearchTerm(searchValue.current.value);
      navigateHome();
      if (searchOpen) {
        closeSearch();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="logo">
          Mini<span className="logo-span">Tube</span>
        </Link>
        <div className="main-search">
          <SearchBar />
        </div>
        <div className="nav-tab">
          {/* to do later, change to Link */}
          <a href="https://jpce.netlify.app/" target="_blank">
            &copy;jp.ev
          </a>
        </div>
      </div>

      <form
        className={`search-hide ${searchOpen ? "open-search" : "close-search"}`}
        onSubmit={handleSubmit}
      >
        <div className="go-back" onClick={closeSearch}>
          <div className="btn-back">
            <BiArrowBack />
          </div>
        </div>
        <div className="toggle-form-control">
          <input
            type="text"
            placeholder="Search"
            ref={searchValue}
            onSubmit={searchVideo}
          />
          <button type="submit" onClick={searchVideo}>
            <FaSearch />
          </button>
        </div>
      </form>
    </nav>
  );
};

export default Navbar;
