import React, { useEffect, useState } from "react";
import Video from "./Video";
import "./App.css";

const API_URL =
  "https://raw.githubusercontent.com/codedamn-classrooms/tiktok-react-material/main/data.json";

export default function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json()) // convert response to JSON
      .then((data) => {
        setVideos(data); // store JSON array in state
      });
  }, []);

  return (
    <div className="app">
      <div className="container">
        {/* Loop over the videos array and render a Video component for each */}
        {videos.map((video, index) => (
          <Video key={index} url={video.url} />
        ))}
      </div>
    </div>
  );
}
