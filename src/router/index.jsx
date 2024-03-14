import { createBrowserRouter } from "react-router-dom";
import * as routes from "./routes";

const router = createBrowserRouter(Object.values(routes));

export default router;
