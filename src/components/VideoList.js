import React from "react";
import VideoItem from "./VideoItem";
import { useGlobalContext } from "../context/context";
import Loading from "./Loading";

const VideoList = () => {
  const { loading, videos } = useGlobalContext();

  if (loading) {
    <Loading />;
  }

  const renderedList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} />;
  });

  return (
    <div className="video-container">
      {renderedList.length > 12 ? renderedList.slice(0, 13) : renderedList}
      <div className="offset"></div>
    </div>
  );
};

export default VideoList;
