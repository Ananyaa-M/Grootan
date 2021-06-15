import Navbar from "./Navbar";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/blog/:id'>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
