// VideoList.js
import React from 'react';

const VideoList = ({ videos, onVideoSelect, selectedVideoId }) => {
  return (
    <div className="w-full bg-gray-800 text-white p-4">
      <h2 className="text-center text-lg font-semibold mb-4">Playlist</h2>
      <div className="space-y-2">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => onVideoSelect(video.id)}
            className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 ${
              video.id === selectedVideoId ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
          >
            {video.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
