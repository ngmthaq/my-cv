import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import { BaseLayout } from "../layouts";

const router = createBrowserRouter([
  {
    path: routes.pathHomePage.path,
    element: <BaseLayout />,
    children: [{ index: true, element: routes.pathHomePage.element }],
  },
]);

export default router;
