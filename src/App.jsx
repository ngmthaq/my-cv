import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import router from "./router";

const App = () => {
  return (
    <Fragment>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </Fragment>
  );
};

export default App;
