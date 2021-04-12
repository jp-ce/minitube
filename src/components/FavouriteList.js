import React from "react";
import FavouriteItems from "./HistoryItems";
import { useGlobalContext } from "../context/context";

const FavouriteList = () => {
  const { favourites, setFavourites } = useGlobalContext();

  const handleDeleteFavourites = () => {
    setFavourites([]);
  };

  return (
    <article className="secondary-section">
      {favourites.length > 0 && (
        <button className="btn" onClick={handleDeleteFavourites}>
          {" "}
          Clear Favourites
        </button>
      )}

      {favourites.map((x) => {
        const { id, snippet } = x;
        return (
          <FavouriteItems key={id.videoId} id={id.videoId} snippet={snippet} />
        );
      })}
      <div className="offset"></div>
    </article>
  );
};

export default FavouriteList;
