import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import PageHome from "./components/pageHome/index";
import PageLogin from "./components/pageLogin/index";
import "antd/dist/antd.css";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Route path="/" exact component={PageHome} />
      <Route path="/login" exact component={PageLogin} />
    </Router>
  );
};

export default App;
