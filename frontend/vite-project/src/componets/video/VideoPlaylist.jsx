// VideoPlaylist.js
import React, { useState, useEffect } from "react";
import { unitVideos } from "./Data.js"; // Import unitVideos from data.js
import VideoList from "./VideoList";  // Import VideoList component
import VideoPlayer from "./VideoPlayer";  // Import VideoPlayer component

const VideoPlaylist = ({ selectedUnit }) => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (selectedUnit && unitVideos[selectedUnit]) {
      setVideos(unitVideos[selectedUnit]);
      setSelectedVideoId(unitVideos[selectedUnit][0]?.id);  // Set the first video as selected by default
    }
  }, [selectedUnit]);

  const handleVideoSelect = (videoId) => {
    setSelectedVideoId(videoId);
  };

  if (!videos || videos.length === 0) {
    return (
      <div className="flex justify-center items-center text-lg text-gray-700">
        No videos available for this unit.
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Video Playlist Sidebar */}
      <VideoList 
        videos={videos} 
        onVideoSelect={handleVideoSelect} 
        selectedVideoId={selectedVideoId} 
      />

      {/* Video Player */}
      <div className="w-full md:w-3/4 p-4">
        <h2 className="text-xl font-semibold mb-4">Now Playing</h2>
        <div className="bg-gray-200 rounded-md p-4">
          {selectedVideoId && <VideoPlayer videoId={selectedVideoId} />}
        </div>
      </div>
    </div>
  );
};

export default VideoPlaylist;
