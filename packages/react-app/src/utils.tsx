import { createRoot } from "react-dom/client";

const nodes = {};
const roots = {};

export function toDOMNode(app, id) {
  let node = nodes[id];
  let root = roots[id];

  if (!node) {
    node = document.createElement("div");
    nodes[id] = node;

    root = createRoot(node);
    roots[id] = root;
  }

  root.render(app);

  return node;
}

// also need to ensure unmount root
