import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const HistoryItems = ({ id, snippet }) => {
  const { setTempSelectedVideo, history } = useGlobalContext();

  const handleClick = () => {
    const oldHistory = history;
    const changeVideo = oldHistory.filter((x) => x.id.videoId === id);
    setTempSelectedVideo(...changeVideo);
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

export default HistoryItems;
