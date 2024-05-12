import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StoryList.css'; // Import the CSS file for styling

function StoryList() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => response.json())
      .then(data => setStories(data.slice(0, 30)));
  }, []);

  return (
    <div className="story-list">
      <h1>Top Stories</h1>
      <div className="cards">
        {stories.map(storyId => (
          <StoryCard key={storyId} storyId={storyId} />
        ))}
      </div>
    </div>
  );
}

function StoryCard({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
      .then(response => response.json())
      .then(data => setStory(data));
  }, [storyId]);

  return (
    <div className="card">
      <h2><Link to={`/story/${storyId}`}>{story.title}</Link></h2>
      <p>Author: {story.by}</p>
      <p>Score: {story.score}</p>
      <p>URL: <a href={story.url}>{story.url}</a></p>
    </div>
  );
}

export default StoryList;
