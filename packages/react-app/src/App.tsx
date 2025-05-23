import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { load, SDK } from "sdk";
import "./App.css";
import { toDOMNode } from "./utils";

function renderCommentsInNode({ comments }) {
  const div = document.createElement("div");
  div.innerHTML = JSON.stringify(comments);
  return div;
}

const Comment = ({ text, author }) => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        margin: 4,
        padding: 4,
        border: "1px solid hotpink",
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
        <button onClick={() => setCount(count + 1)}>{count} ⬆️</button>
      </div>
    </div>
  );
};

const Comments = ({ comments, globalCount }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Custom Comments UI Global count is {globalCount}
      <div>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            text={comment.text}
            author={comment.author}
          />
        ))}
      </div>
      <button onClick={() => setCount((count) => count + 1)}>
        Local count is {count}
      </button>
    </div>
  );
};

function renderCommentsFromReact({ comments, globalCount }) {
  // The id passed here has to be unique for each <Comments /> component (e.g. appends the unique id for comments group), here for demonstration it's not unique and hardcoded
  return toDOMNode(
    <Comments comments={comments} globalCount={globalCount} />,
    "COMMENTS"
  );
}

function App() {
  const [count, setCount] = useState(0);
  const sdkContainerRef = useRef(null);

  useEffect(() => {
    load({
      container: sdkContainerRef.current,
      renderComments: ({ comments }) =>
        renderCommentsFromReact({ comments, globalCount: count }),
    });
    // if we pass global count here, it will end up doing load again
  }, []);

  return (
    <>
      <div ref={sdkContainerRef} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          global count in react-app {count}
        </button>
      </div>
    </>
  );
}

export default App;
