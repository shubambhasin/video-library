import "./style.css";
import Home from "./components/Home";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Saved from "./components/pages/Saved";
import LikedVideos from "./components/pages/LikedVideos";
import HistoryPage from "./components/pages/History";
import Unliked from "./components/pages/Unliked";
function App() {
  return (
    <HashRouter>
      <div className="App">
       
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/saved" exact component={Saved} />
          <Route path="/liked" component={LikedVideos} />
          <Route path="/unliked" component={Unliked} />
          <Route path="/history" component={HistoryPage} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
