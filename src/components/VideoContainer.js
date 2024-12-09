import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/constant";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addVideos } from "../utils/videosSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  const fetchVideos = async () => {
    const response = await fetch(YOUTUBE_API);
    const data = await response.json();
    dispatch(addVideos(data.items));
    console.log(data.items);
    setVideos(data.items);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  if (videos.length === 0) return;
  return (
    <div className="flex flex-row flex-wrap justify-around w-full content-between">
      {videos.map((video) => (
        <Link to={"watch?v=" + video.id} key={video.id}>
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
