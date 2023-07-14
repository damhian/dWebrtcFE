import { RouterProvider } from "react-router-dom";
import router from "./data/router";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
