import React from "react";
import { Link, useLocation } from "react-router-dom";
import ExploreButtons from "./ExploreButtons";
import { exploreButtons } from "../localdata/data";
import { FaHome } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";

const Sidebar = ({ dimensions }) => {
  return (
    <article className="sidebar-tabs">
      <Link
        to="/"
        className={useLocation().pathname === "/" ? "active-tab" : ""}
      >
        <span className="normal-text show">Home</span>
        <span className="sidebar-icon hide">
          <FaHome />
        </span>
      </Link>
      <Link
        to="/history"
        className={useLocation().pathname === "/history" ? "active-tab" : ""}
      >
        <span className="normal-text show">History</span>
        <span className="sidebar-icon hide">
          <FaHistory />
        </span>
      </Link>
      <Link
        to="/favourites"
        className={useLocation().pathname === "/favourites" ? "active-tab" : ""}
      >
        <span className="normal-text show">Favourites</span>
        <span className="sidebar-icon hide">
          <FaBookmark />
        </span>
      </Link>

      {useLocation().pathname === "/" ? (
        <div className="explore-tabs">
          <h3>
            <span className="normal-text show">Explore</span>
            <span className="sidebar-icon sidebar-explore hide">
              <FaVideo />
            </span>
          </h3>
          <div className="explore-genres">
            {exploreButtons.map((btn) => {
              return <ExploreButtons key={btn.id} btn={btn} />;
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </article>
  );
};

export default Sidebar;
