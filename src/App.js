import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './hoc/Navbar/Navbar';
import Main from './containers/Main/Main';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';

function App() {

  let routes = (
    <Switch>
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/" exact component={Main} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      <Navbar>
        {routes}
      </Navbar>
    </div>
  );
}

export default App;