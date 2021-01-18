import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

import Home from './Home'

function App() {
  return (
    <div className="App">
    {/* Switch */}
      <Link className="homeLink" to="/tweets">Home</Link>
      <Switch>
        {/* <Route exact path="/tweets/:id" render={routerProps => {
          <OneTweet {...routerProps} />
        }}/> */}
        <Route path="/tweets" component={Home} />
      </Switch>
      {/* <footer className="teamAwesomeInc"> created by Team Awesome Inc.</footer> */}
    </div>
  );
}

export default App;