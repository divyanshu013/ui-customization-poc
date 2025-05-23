import React, { useState } from "react";
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

const SDK = () => {
  const [comments, setComments] = useState(COMMENTS);

  return (
    <main>
      <h1>SDK</h1>
      <h2>{comments.length} Comments</h2>
      <section>
        <Comments comments={comments} />
      </section>
    </main>
  );
};

export default SDK;
