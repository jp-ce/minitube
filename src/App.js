import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Favourite from "./pages/Favourite";
import History from "./pages/History";
import VideoPlay from "./pages/VideoPlay";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* might need an id here to play specific video */}
        <Route exact path="/videoplaying/:id">
          <VideoPlay />
        </Route>

        <Route exact path="/favourites">
          <Favourite />
        </Route>

        <Route exact path="/history">
          <History />
        </Route>

        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
