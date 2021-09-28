import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Startups from "../Pages/Startups";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

function Router(props) {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/startups" component={Startups} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default Router;