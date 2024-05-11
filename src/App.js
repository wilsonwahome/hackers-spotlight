import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import StoryList from './components/StoryList';
import StoryDetails from './components/StoryDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={StoryList} />
          <Route path="/story/:id" component={StoryDetails} />
          <Route path="/search" component={SearchBar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
