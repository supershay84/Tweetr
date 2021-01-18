import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './Home'

function App() {
  return (
    <div className="App">
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Navbar.Brand href="#home">Tweetr</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Explore</Nav.Link>
      <NavDropdown title="Profile" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Support</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">My DMs</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Notifications
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
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