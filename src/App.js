import logo from './logo.svg';

import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Edit from './Edit';


function App() {
  return (
    //Router to house different components
    <Router>

    <div className="App">
      <Navbar/>

    <div className="content">
     
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/create">
            <Create />
          </Route>

          <Route path="/edit/:id">
            <Edit />
          </Route>

          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>


          <Route path="*">
            <NotFound/>
          </Route>

        </Switch>
    </div>
    </div>

    </Router>
  );
}

export default App;
