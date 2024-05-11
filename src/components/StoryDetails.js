import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function StoryDetails() {
  const { id } = useParams();
  const [story, setStory] = useState({});

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(response => response.json())
      .then(data => setStory(data));
  }, [id]);

  return (
    <div>
      {story && (
        <>
          <h1>{story.title}</h1>
          <p>{story.text}</p>
          <p>Author: {story.by}</p>
          <p>Score: {story.score}</p>
          <p>URL: <a href={story.url}>{story.url}</a></p>
          <p>Comments:</p>
          <ul>
            {story.kids && story.kids.map(commentId => (
              <li key={commentId}>
                <Comment commentId={commentId} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function Comment({ commentId }) {
  const [comment, setComment] = useState({});

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`)
      .then(response => response.json())
      .then(data => setComment(data));
  }, [commentId]);

  return (
    <div>
      {comment && (
        <>
          <p>{comment.text}</p>
          <p>Author: {comment.by}</p>
        </>
      )}
    </div>
  );
}

export default StoryDetails;
