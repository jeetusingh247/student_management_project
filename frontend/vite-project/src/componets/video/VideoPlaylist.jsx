// VideoPlaylist.js
import React, { useState, useEffect } from "react";
import { unitVideos } from "./Data.js";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";

const VideoPlaylist = ({ selectedUnit }) => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (selectedUnit && unitVideos[selectedUnit]) {
      setVideos(unitVideos[selectedUnit]);
      setSelectedVideoId(unitVideos[selectedUnit][0]?.id); // Set the first video as selected by default
    }
  }, [selectedUnit]);

  const handleVideoSelect = (videoId) => {
    setSelectedVideoId(videoId);
  };

  if (!videos || videos.length === 0) {
    return (
      <div className="flex justify-center items-center text-lg text-gray-600">
        No videos available for this unit.
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen bg-gray-100">
      {/* Video Playlist Sidebar - 100% width on mobile, 25% on large screens */}
      <div
        className="w-full lg:w-1/4 bg-gray-200 p-2 flex flex-col"
        style={{
          borderRight: "2px solid #ccc",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)"
        }}
      >
        <h3 className="text-center font-bold text-gray-700 mb-4">Playlist</h3>
        <VideoList 
          videos={videos} 
          onVideoSelect={handleVideoSelect} 
          selectedVideoId={selectedVideoId} 
          style={{ padding: "10px" }}
        />
      </div>

      {/* Video Player - Full height on mobile, 75% width on large screens */}
      <div className="w-full lg:w-3/4 flex justify-center items-center bg-white h-screen lg:h-auto">
        <div
          className="video-container rounded-md border border-gray-300 w-full h-full lg:w-11/12 lg:h-5/6"
          style={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            border: "2px solid red",
            margin: "0",
            padding: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {selectedVideoId ? (
            <VideoPlayer videoId={selectedVideoId} style={{ width: "100%", height: "100%" }} />
          ) : (
            <div className="text-center text-gray-500 text-lg">
              Select a video to start watching
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlaylist;
