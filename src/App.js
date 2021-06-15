import Navbar from "./Navbar";
import Home from './Home';
import BlogDetails from './BlogDetails';
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
              <BlogDetails />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
