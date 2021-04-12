import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const RecommendedVideos = ({ id, snippet }) => {
  const {
    videos,
    addHistory,
    history,
    setTempSelectedVideo,
  } = useGlobalContext();

  const handleVideoChange = () => {
    const oldVideos = videos;
    const changeVideo = oldVideos.filter((x) => x.id.videoId === id);

    setTempSelectedVideo(...changeVideo);

    const check = history.length > 0 ? history.map((x) => x.id.videoId) : [];
    const check2 = check.includes(changeVideo[0].id.videoId) ? true : false;
    if (!check2) {
      addHistory(...changeVideo);
    }
    return;
  };

  return (
    <Link
      to={`/videoplaying/${id}`}
      onClick={handleVideoChange}
      className="recommendations"
    >
      <div className="img-container">
        <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
      </div>
      <div className="side-content">
        <h3>{snippet.title}</h3>
        <h4 className="hide-player-description">
          {snippet.description.length > 60
            ? `${snippet.description.slice(0, 61)}...`
            : snippet.description}
        </h4>
      </div>
    </Link>
  );
};

export default RecommendedVideos;
