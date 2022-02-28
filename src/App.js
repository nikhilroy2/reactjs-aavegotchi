import logo from "./logo.svg";
import "./App.css";
import PortalClosed from "./Pages/PortalClosed/PortalClosed";
import PortalItems from "./Pages/PortalItems/PortalItems";
import { BrowserRouter, Switch, Route, Routes, Link } from "react-router-dom";


// Compnents. ...........

import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<PortalClosed></PortalClosed>}></Route>
            <Route
              path="/portalitems"
              element={<PortalItems></PortalItems>}
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
