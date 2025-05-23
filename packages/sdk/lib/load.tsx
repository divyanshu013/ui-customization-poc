import { createRoot } from "react-dom/client";
import SDK from "./SDK";

const load = ({ container, renderComments = null }) => {
  if (!container) {
    throw new Error("Container is not defined");
  }

  createRoot(container).render(<SDK renderComments={renderComments} />);
};

export default load;
