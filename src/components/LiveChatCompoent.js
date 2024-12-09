import React, { useState, useEffect } from "react";
import ChatComment from "./ChatComment";
import { addChat } from "../utils/chatSlice";
import { generateRandomNames, generateRandomMessages } from "../utils/helpers";
import { useSelector, useDispatch } from "react-redux";

const LiveChatCompoent = () => {
  const dispatch = useDispatch();
  const chatmessages = useSelector((store) => store.chat.messages);
  const [livemessage, setLiveMessage] = useState("");

  useEffect(() => {
    let timer = setInterval(() => {
      dispatch(
        addChat({
          name: generateRandomNames(),
          message: generateRandomMessages(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-full ml-2 border border-slate-100">
      <h1 className="font-bold text-xl  bg-slate-300 absolute w-[500px] p-2">
        Live Chat :
      </h1>
      <div className=" bg-white w-full h-[400px] overflow-y-scroll flex flex-col justify-end">
        {chatmessages.map((chat, index) => {
          return (
            <ChatComment key={index} name={chat.name} message={chat.message} />
          );
        })}
      </div>
      <form
        className="flex w-full my-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addChat({ name: "rudra", message: livemessage }));
          setLiveMessage("");
        }}>
        <input
          type="text"
          className="border border-b-slate-200 bg-slate-300 text-black font-semibold mx-2 px-2 rounded-xl w-[400px] "
          placeholder="comment"
          value={livemessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button
          className="bg-slate-200 font-semibold p-2 rounded-xl"
          type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChatCompoent;
