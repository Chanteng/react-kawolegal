import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Startup from './Pages/Startup'
import Register from './Pages/Register'
import Home from './Pages/Home';
import Login from './Pages/Login'
import Header from './Components/Header'
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <div><Header /></div>
   <Router>
     <Switch>
      <Route exact={true} path="/" component={Home} />
       <Route exact={true} path="/startup" component={Startup} />
       <Route exact={true} path="/register" component={Register} />
       <Route exact={true} path="/login" component={Login} />

     </Switch>
   </Router>
   <div><Footer /></div>
    </>
   
  );
}

export default App;
