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

const Comments = ({ comments }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Custom Comments UI
      <div>
        {comments.map((comment) => (
          <div
            key={comment.id}
            style={{ margin: 4, border: "1px solid hotpink", padding: 4 }}
          >
            {comment.text} - by {comment.author}
          </div>
        ))}
      </div>
      <button onClick={() => setCount((count) => count + 1)}>
        Local count is {count}
      </button>
    </div>
  );
};

function renderCommentsFromReact({ comments }) {
  // The id passed here has to be unique for each <Comments /> component (e.g. appends the unique id for comments group), here for demonstration it's not unique and hardcoded
  return toDOMNode(<Comments comments={comments} />, "COMMENTS");
}

function App() {
  const [count, setCount] = useState(0);
  const sdkContainerRef = useRef(null);

  useEffect(() => {
    load({
      container: sdkContainerRef.current,
      renderComments: renderCommentsFromReact,
    });
  }, []);

  return (
    <>
      <div ref={sdkContainerRef} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
