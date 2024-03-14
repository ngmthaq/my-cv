import { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { InitialLoading } from "./components";

const App = () => {
  return (
    <Fragment>
      <CssBaseline enableColorScheme />
      <InitialLoading />
    </Fragment>
  );
};

export default App;
