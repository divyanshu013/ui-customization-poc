import React, { useEffect, useRef, useState } from "react";
import Comments from "./Comments";

const COMMENTS = [
  {
    id: "a",
    text: "Imagine",
    author: "John",
  },
  {
    id: "b",
    text: "Yesterday",
    author: "Paul",
  },
  {
    id: "c",
    text: "Something",
    author: "George",
  },
];

let id = 0;

const SDK = ({ renderComments = null }) => {
  const [comments, setComments] = useState(COMMENTS);
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (renderComments) {
      const node = renderComments({ comments });
      const commentsContainer = commentsRef.current;

      if (commentsContainer) {
        if (commentsContainer.firstChild) {
          commentsContainer.replaceChild(node, commentsContainer.firstChild);
        } else {
          commentsContainer.appendChild(node);
        }
      }
    }
  }, [comments, renderComments]);

  return (
    <main>
      <h1>SDK</h1>
      <h2>{comments.length} Comments</h2>
      <button
        onClick={() =>
          setComments((prev) => [
            ...prev,
            { id: String(id++), text: `Hello ${id}`, author: `Author ${id}` },
          ])
        }
      >
        Add comment
      </button>
      <section>
        {renderComments ? (
          <div ref={commentsRef} />
        ) : (
          <Comments comments={comments} />
        )}
      </section>
    </main>
  );
};

export default SDK;
