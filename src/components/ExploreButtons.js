import React, { useRef } from "react";

import { useGlobalContext } from "../context/context";
const ExploreButtons = ({ btn }) => {
  const { setSearchTerm } = useGlobalContext();
  const exploreBtn = useRef();

  const handleClick = () => {
    setSearchTerm(exploreBtn.current.outerText);
  };

  return (
    <button ref={exploreBtn} onClick={handleClick}>
      {btn.title}
    </button>
  );
};

export default ExploreButtons;
