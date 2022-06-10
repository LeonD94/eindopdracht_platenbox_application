import React from 'react';
import TopMenu from './components/TopMenu';
import HomePage from './pages/Home';
import PlatenboxPage from './pages/Library';
import ZoekenPage from './pages/Search';
import LoginPage from './pages/Login';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';


function App() {

  return (
    <Router>
      <TopMenu />

        <Switch>
            <Route exact path="/">
            <HomePage />
            </Route>

            <Route path="/library">
            <PlatenboxPage />
            </Route>

            <Route path="/search">
            <ZoekenPage />
            </Route>

            <Route path="/login">
            <LoginPage />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
