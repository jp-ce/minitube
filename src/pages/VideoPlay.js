import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import RecommendedVideos from "../components/RecommendedVideos";
import { FaBookmark } from "react-icons/fa";

const VideoPlay = () => {
  const {
    videos,
    favourites,
    addFavourites,
    setIsHome,
    tempSelectedVideo,
    tempRecommended,
    setTempRecommended,
  } = useGlobalContext();

  setIsHome(false);

  const { id } = useParams();
  const { title, description, channelTitle } = tempSelectedVideo.snippet;

  const filteredVideos = () => {
    const oldVideos = videos;
    const recommendedVideo = oldVideos.filter((x) => x.id.videoId !== id);
    const trimmedLength =
      recommendedVideo.length > 5
        ? recommendedVideo.slice(0, 5)
        : recommendedVideo;
    setTempRecommended(trimmedLength);
  };

  const handleFavourite = () => {
    const check =
      favourites.length > 0 ? favourites.map((x) => x.id.videoId) : [];
    const check2 = check.includes(tempSelectedVideo.id.videoId) ? true : false;
    if (!check2) {
      addFavourites(tempSelectedVideo);
    }
    return;
  };

  useEffect(() => {
    filteredVideos();
  }, [id]);

  const videoUrl = `https://www.youtube.com/embed/${id}`;

  return (
    <article className="video-player">
      <div className="video-detail">
        <div className="video-frame">
          <iframe title="video player" src={videoUrl} />
        </div>
        <div className="frame-contents">
          <h4>{title}</h4>
          <hr />
          <h2>{channelTitle}</h2>
          <p className="hide-player-description">{description}</p>
          <button className="btn" onClick={handleFavourite}>
            <FaBookmark />
            Favourite
          </button>
        </div>
      </div>
      <div className="recommended-videos">
        {tempRecommended.map((video) => {
          const { id, snippet } = video;
          return (
            <RecommendedVideos
              key={id.videoId}
              id={id.videoId}
              snippet={snippet}
            />
          );
        })}
      </div>
    </article>
  );
};

export default VideoPlay;
