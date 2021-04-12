import React from "react";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import FavouriteList from "./FavouriteList";
import HistoryList from "./HistoryList";
import Sidebar from "./Sidebar";
import VideoList from "./VideoList";

const Dashboard = () => {
  const { setIsHome } = useGlobalContext();

  useLocation().pathname !== "/" ? setIsHome(false) : setIsHome(true);

  return (
    <main>
      <section className="section-dashboard">
        <div className="sidebar">
          <Sidebar />
        </div>
        {useLocation().pathname === "/" && (
          <div className="video-list">
            <VideoList />
          </div>
        )}

        {useLocation().pathname === "/history" && (
          <div className="secondary-list">
            <HistoryList />
          </div>
        )}

        {useLocation().pathname === "/favourites" && (
          <div className="secondary-list">
            <FavouriteList />
          </div>
        )}
      </section>
    </main>
  );
};

export default Dashboard;
