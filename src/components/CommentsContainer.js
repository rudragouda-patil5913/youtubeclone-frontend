import commentData from "../utils/comments.json";

const Comment = ({ data }) => {
  const { name, reply } = data;
  return (
    <div className="bg-slate-300 opacity-90 w-[300px] flex items-center pt-1">
      <img
        className="h-10 rounded-full"
        src="https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
        alt="profile-img"
      />
      <h1 className="text-md pl-2 font-semibold text-black">{name}</h1>
      <span className="pl-2">{reply}</span>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments?.map((comment) => (
    <div key={comment.id}>
      <Comment data={comment} />
      <div className="pl-12 border-l-2 border-l-black w-[500px]">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsConatiner = () => {
  return (
    <>
      <h1 className="text-black font-bold text-2xl m-2 w-[200px] box-border">
        Comments :
      </h1>
      <div className="bg-slate-300 w-[600px] my-2">
        <CommentList comments={commentData.comments} />
      </div>
    </>
  );
};

export default CommentsConatiner;
