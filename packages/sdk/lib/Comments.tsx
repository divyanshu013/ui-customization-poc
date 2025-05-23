import { useState } from "react";

const Comment = ({ text, author }) => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        border: "1px solid #ccc",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 32,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {text} <em>by {author}</em>
        </div>
        <button onClick={() => setCount(count + 1)}>{count} 👍</button>
      </div>
    </div>
  );
};

const Comments = ({ comments }) => {
  return comments.map((comment) => (
    <Comment key={comment.id} text={comment.text} author={comment.author} />
  ));
};

export default Comments;
