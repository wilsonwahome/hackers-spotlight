import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function StoryList() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => response.json())
      .then(data => setStories(data.slice(0, 30)));
  }, []);

  return (
    <div>
      <h1>Top Stories</h1>
      <ul>
        {stories.map(storyId => (
          <li key={storyId}>
            <StoryLink storyId={storyId} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function StoryLink({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
      .then(response => response.json())
      .then(data => setStory(data));
  }, [storyId]);

  return (
    <Link to={`/story/${storyId}`}>{story.title}</Link>
  );
}

export default StoryList;
