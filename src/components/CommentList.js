import SingleComment from './SingleComment';

const CommentList = ({ comments, refreshComments }) => {
  return (
    <div>
      {comments.map((c) => (
        <SingleComment key={c._id} comment={c} refreshComments={refreshComments} />
      ))}
    </div>
  );
};

export default CommentList;