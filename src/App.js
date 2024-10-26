
import React, { useState } from 'react';
import youtube from './api/youtube';
import Home from './pages/Home';

const App = () => {
  const [videos, setVideos] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items); 
  };

  return (
    <div>
      <Home onSearchSubmit={onSearchSubmit} videos={videos} />
    </div>
  );
};

export default App;
