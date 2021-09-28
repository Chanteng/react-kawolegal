import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import Router from "./Components/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Router />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
