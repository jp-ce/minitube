import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const VideoItem = ({ video }) => {
  const { setTempSelectedVideo, addHistory, history } = useGlobalContext();

  const handleClick = () => {
    // setSelectedVideo(video);
    setTempSelectedVideo(video);

    const historyArray =
      history.length > 0 ? history.map((x) => x.id.videoId) : [];
    !historyArray.includes(video.id.videoId) && addHistory(video);
  };

  const { videoId } = video.id;
  const { title, thumbnails, channelTitle } = video.snippet;
  return (
    <div className="video-item">
      <Link to={`/videoplaying/${videoId}`} onClick={handleClick}>
        <img src={thumbnails.medium.url} alt={title} />
        <div className="content">
          <div className="video-header">
            {title.length > 50 ? `${title.slice(0, 50)}...` : title}
          </div>
          <div className="video-channel">{channelTitle}</div>
        </div>
      </Link>
    </div>
  );
};

export default VideoItem;
