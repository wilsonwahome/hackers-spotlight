import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import StoryList from './components/StoryList';
import StoryDetails from './components/StoryDetails';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={StoryList} />
            <Route path="/story/:id" component={StoryDetails} />
            <Route path="/search" component={SearchResults} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
