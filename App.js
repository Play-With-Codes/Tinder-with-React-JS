import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import Profile from './profile';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/profile">
              <Header backButton="/" />
              <Profile />
            </Route>
            <Route path="/chat/:person">
              <Header backButton="/chat" />
              <ChatScreen />
            </Route>
            <Route path="/chat">
              <Header backButton="/" />
              <Chats />
            </Route>
            {/* Default Page */}
            <Route path="/">
        <Header />
              <TinderCards />
              <SwipeButtons />
            </Route>
          </Switch>
        </Router>


    </div>
  );
}
export default App;
