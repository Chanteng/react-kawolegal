import React from "react";
import Startup from "../Pages/Startup"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import Home from "../Pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Router() {
  return <div>

    <BrowserRouter>

     <Switch>
      <Route exact={true} path="/" component={Home} />
       <Route exact={true} path="/startup" component={Startup} />
       <Route exact={true} path="/register" component={Register} />
       <Route exact={true} path="/login" component={Login} />

     </Switch>

    </BrowserRouter>

  </div>;
}

export default Router;
