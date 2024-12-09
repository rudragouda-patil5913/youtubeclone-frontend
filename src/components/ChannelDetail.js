import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const ChannelDetail = () => {
  const videos = useSelector((store) => store.videos.list);
  const [search] = useSearchParams();
  const keyId = search.get("v");
  console.log(keyId.toString());
  const currentVideo = videos.filter((video) => video.id == keyId);
  const { title, channelTitle } = currentVideo[0].snippet;
  const { commentCount, likeCount, viewCount } = currentVideo[0].statistics;
  console.log(currentVideo[0].snippet);
  return (
    <div className="w-[800px] bg-slate-300 p-2 border border-slate-100 ">
      <div>
        <h1 className="font-bold text-lg pb-2">{title}</h1>
        <div className="flex h-10 ">
          <span className="bg-slate-100 rounded-full font-bold p-2 w-10 text-center">
            {channelTitle[0]}
          </span>
          <h1 className="font-semibold text-lg p-2">{channelTitle}</h1>
        </div>
      </div>
    </div>
  );
};

export default ChannelDetail;
