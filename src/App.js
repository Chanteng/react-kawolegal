import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Router from "./Components/Router";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <BrowserRouter>
        <Switch>
          <Router />
        </Switch>
      </BrowserRouter>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
