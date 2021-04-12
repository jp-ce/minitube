import React from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context/context";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const {
    setSearchTerm,
    isHome,
    searchOpen,
    setSearchOpen,
  } = useGlobalContext();
  const searchValue = React.useRef();

  const history = useHistory();

  const navigateHome = () => {
    history.push("/");
  };

  const searchVideo = () => {
    if (isHome) {
      setSearchTerm(searchValue.current.value);
    }
    if (!isHome) {
      setSearchTerm(searchValue.current.value);
      navigateHome();
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search-main" onSubmit={handleSubmit}>
      <div className="form-control">
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

      <div className="form-control-minimized">
        <button type="submit" onClick={toggleSearch}>
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
