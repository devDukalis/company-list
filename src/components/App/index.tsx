import { RouterProvider } from "react-router-dom";

import { router } from "@/routes";

import "@/components/App/styles.css";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
