import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const FavouriteItems = ({ id, snippet }) => {
  const { setSelectedVideo, videos } = useGlobalContext();

  const handleClick = () => {
    const oldVideos = videos;
    const changeVideo = oldVideos.filter((x) => x.id.videoId === id);
    setSelectedVideo(...changeVideo);
  };

  const { thumbnails, title, channelTitle, description } = snippet;
  return (
    <Link
      to={`/videoplaying/${id}`}
      className="secondary-item"
      onClick={handleClick}
    >
      <div className="secondary-img">
        <img src={thumbnails.medium.url} alt={title} />
      </div>
      <div className="secondary-contents">
        <h3>{title}</h3>
        <p>{channelTitle}</p>
        <h4 className="hide-description">{description}</h4>
      </div>
    </Link>
  );
};

export default FavouriteItems;
