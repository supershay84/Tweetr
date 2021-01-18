import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

import Home from './Home'
import Show from './Show'


function App() {
  return (
    <div className="App">
    {/* Switch */}
      <Link className="homeLink" to="/tweets">Home</Link>
      <Switch>
        <Route exact path="/tweets/:id" render={routerProps => {
          <Show {...routerProps} />
        }}/>
        <Route path="/tweets" component={Home} />
      </Switch>
      {/* <footer className="teamAwesomeInc"> created by Team Awesome Inc.</footer> */}
    </div>
  );
}

export default App;