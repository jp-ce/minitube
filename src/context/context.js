import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  useEffect,
} from "react";
import youtube from "../apis/youtube";
import { mockVideoData } from "../localdata/mockVideos";

const getLocalStorage = () => {
  let history = localStorage.getItem("history");
  if (history) {
    return (history = JSON.parse(localStorage.getItem("history")));
  } else {
    return [];
  }
};

const getLocalStorage2 = () => {
  let favourites = localStorage.getItem("favourites");
  if (favourites) {
    return (favourites = JSON.parse(localStorage.getItem("favourites")));
  } else {
    return [];
  }
};

const getLocalStorage3 = () => {
  let tempSelectedVideo = localStorage.getItem("tempSelectedVideo");
  if (tempSelectedVideo) {
    return (tempSelectedVideo = JSON.parse(
      localStorage.getItem("tempSelectedVideo")
    ));
  } else {
    return [];
  }
};

const getLocalStorage4 = () => {
  let tempRecommended = localStorage.getItem("tempRecommended");
  if (tempRecommended) {
    return (tempRecommended = JSON.parse(
      localStorage.getItem("tempRecommended")
    ));
  } else {
    return [];
  }
};

const getLocalStorage5 = () => {
  let videos = localStorage.getItem("videos");
  if (videos) {
    return (videos = JSON.parse(localStorage.getItem("videos")));
  } else {
    return [];
  }
};

const getLocalStorage6 = () => {
  let searchTerm = localStorage.getItem("searchTerm");
  if (searchTerm) {
    return (searchTerm = JSON.parse(localStorage.getItem("searchTerm")));
  } else {
    return [];
  }
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(getLocalStorage6());
  const [isHome, setIsHome] = useState(false);
  const [videos, setVideos] = useState(getLocalStorage5());
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [tempSelectedVideo, setTempSelectedVideo] = useState(
    getLocalStorage3()
  );
  const [tempRecommended, setTempRecommended] = useState(getLocalStorage4());
  const [activeTab, setactiveTab] = useState(false);
  const [history, setHistory] = useState(getLocalStorage());
  const [favourites, setFavourites] = useState(getLocalStorage2());
  const [searchOpen, setSearchOpen] = useState(false);

  //use these to use app with local mock data, comment out the useState for both searchTerm and videos above,
  //then uncomment these ones below
  // const [searchTerm, setSearchTerm] = useState("buildings");
  // const [videos, setVideos] = useState([]);

  const addHistory = (payload) => {
    let oldHistory = history;
    let newHistory = [...new Set([...oldHistory, payload])];
    setHistory(newHistory);
  };

  const addFavourites = (payload) => {
    let oldFavourites = favourites;
    let newFavourites = [...new Set([...oldFavourites, payload])];
    setFavourites(newFavourites);
  };

  // -------------------------------- using the API -----------------------------
  const fetchVideos = useCallback(async () => {
    if (searchTerm.length > 3) {
      setLoading(true);
      try {
        const response = await youtube.get("/search", {
          params: {
            q: searchTerm,
          },
        });
        setVideos(
          response.data.items.filter(
            (x) =>
              x.id.kind !== "youtube#channel" &&
              !x.snippet.thumbnails.medium.url.includes("live.")
          )
        );
      } catch (error) {
        console.log(error);
      }
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchVideos();
  }, [searchTerm]);

  useEffect(() => {
    localStorage.setItem("searchTerm", JSON.stringify(searchTerm));
    localStorage.setItem("videos", JSON.stringify(videos));
    localStorage.setItem("history", JSON.stringify(history));
    localStorage.setItem("favourites", JSON.stringify(favourites));
    localStorage.setItem(
      "tempSelectedVideo",
      JSON.stringify(tempSelectedVideo)
    );
    localStorage.setItem("tempRecommended", JSON.stringify(tempRecommended));
  }, [
    searchTerm,
    videos,
    history,
    favourites,
    tempSelectedVideo,
    tempRecommended,
  ]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        setSearchTerm,
        videos,
        activeTab,
        setactiveTab,
        setSelectedVideo,
        selectedVideo,
        history,
        setHistory,
        addHistory,
        favourites,
        setFavourites,
        addFavourites,
        isHome,
        setIsHome,
        tempSelectedVideo,
        setTempSelectedVideo,
        tempRecommended,
        setTempRecommended,
        searchOpen,
        setSearchOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
