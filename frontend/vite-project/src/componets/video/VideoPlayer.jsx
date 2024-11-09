// VideoPlayer.js
import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="w-full h-full p-0 m-0">
      <YouTube videoId={videoId} opts={opts} className="w-full h-full" />
    </div>
  );
};

export default VideoPlayer;
