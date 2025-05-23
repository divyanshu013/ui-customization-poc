import React, { useState } from "react";

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

const SDK = () => {
  const [comments, setComments] = useState(COMMENTS);

  return (
    <main>
      <h1>SDK</h1>
      <h2>All Comments</h2>
      <section>
        {comments.map((comment) => (
          <div
            key={comment.id}
            style={{
              margin: "10px",
              padding: "10px",
              border: "1px solid #ccc",
            }}
          >
            <p>
              {comment.text} <em>by {comment.author}</em>
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default SDK;
