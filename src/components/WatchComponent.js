import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeSideBar } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChatCompoent from "./LiveChatCompoent";
import ChannelDetail from "./ChannelDetail";

const WatchComponent = () => {
  const [searchParams] = useSearchParams();
  let key = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeSideBar());
  }, []);
  return (
    <>
      <div className="ml-8 mt-4">
        <div className="flex w-full">
          <iframe
            width="800"
            height="400"
            src={"https://www.youtube.com/embed/" + key}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
          <div className="w-[500px] h-[400px]">
            <LiveChatCompoent />
          </div>
        </div>
        <ChannelDetail />
        <CommentsContainer />
      </div>
    </>
  );
};

export default WatchComponent;
