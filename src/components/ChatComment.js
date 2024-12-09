const ChatComment = ({ name, message }) => {
  return (
    <div className="flex items-center hover:bg-slate-300 m-1 ">
      <img
        className="h-10 mx-2 rounded-[50%] "
        src="https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
        alt="profile-img"
      />
      <h1 className="font-semibold mx-2">{name}</h1>
      <h1 className="font-mono ">{message}</h1>
    </div>
  );
};

export default ChatComment;
