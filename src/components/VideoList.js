import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  return (
    <div>
      {videos.map((video) => (
        <VideoItem key={video.id.videoId} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
