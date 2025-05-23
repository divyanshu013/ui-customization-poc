import { createRoot } from "react-dom/client";
import SDK from "./SDK";

const load = ({ container }) => {
  if (!container) {
    throw new Error("Container is not defined");
  }

  createRoot(container).render(<SDK />);
};

export default load;
