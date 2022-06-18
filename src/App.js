import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  dispatchLogin,
  fetchUser,
  dispatchGetUser,
} from "./redux/actions/authAction";
import Navbarcontent from "./components/body/Content/Navbarcontent";
import Sidebar from "./components/body/Content/Sidebarcontent";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import axios from "axios";

function App() {
  return (
    <Router>
      <div className="App">
        <Body />
      </div>
    </Router>
  );
}

export default App;
