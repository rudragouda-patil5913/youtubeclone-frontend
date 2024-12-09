import React from "react";

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { localized, thumbnails } = snippet;
  return (
    <div className="my-2 mx-1 h-72 w-72 bg-black rounded-xl">
      <div>
        <img src={thumbnails.high.url} alt="thumbnail" className="rounded-xl" />
      </div>
      <div>
        <h1 className="text-white font-bold p-1">{localized.title}</h1>
      </div>
     
    </div>
  );
};

export default VideoCard;
