import React from "react";
import HistoryItems from "./HistoryItems";
import { useGlobalContext } from "../context/context";

const HistoryList = () => {
  const { history, setHistory } = useGlobalContext();

  const handleDeleteHistory = () => {
    setHistory([]);
  };

  return (
    <article className="secondary-section">
      {history.length > 0 && (
        <button className="btn" onClick={handleDeleteHistory}>
          {" "}
          Clear History
        </button>
      )}

      {history.map((x) => {
        const { id, snippet } = x;
        return (
          <HistoryItems key={id.videoId} id={id.videoId} snippet={snippet} />
        );
      })}
      <div className="offset"></div>
    </article>
  );
};

export default HistoryList;
