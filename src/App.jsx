import { createContext, useRef, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import InitialLoading from "./components/InitialLoading";
import Heading from "./components/Heading";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

export const AppContext = createContext({});

const App = () => {
  const searchParams = useRef(new URLSearchParams(location.search));
  const currentTab = searchParams.current.get("tab");
  const [tab, setTab] = useState(currentTab && tabs.includes(currentTab) ? currentTab : PROFILE_TAB);

  const handleChangeSearchParams = (name, value) => {
    const newSearchParams = new URLSearchParams(searchParams.current);
    newSearchParams.set(name, value);
    searchParams.current = newSearchParams;
    const URL = location.protocol + "//" + location.host + location.pathname + "?" + newSearchParams.toString();
    history.pushState({ path: URL }, "", URL);
  };

  const handleClickProfileTab = () => {
    handleChangeSearchParams("tab", PROFILE_TAB);
    setTab(PROFILE_TAB);
  };

  const handleClickProjectsTab = () => {
    handleChangeSearchParams("tab", PROJECTS_TAB);
    setTab(PROJECTS_TAB);
  };

  const ContextValue = {
    searchParams,
    tab,
    handleClickProfileTab,
    handleClickProjectsTab,
  };

  return (
    <AppContext.Provider value={ContextValue}>
      <CssBaseline enableColorScheme />
      <InitialLoading />
      <Container maxWidth="lg">
        <Heading />
        {tab === PROFILE_TAB && <Profile />}
        {tab === PROJECTS_TAB && <Projects />}
      </Container>
    </AppContext.Provider>
  );
};

export default App;

export const PROFILE_TAB = "1";
export const PROJECTS_TAB = "2";
export const tabs = [PROFILE_TAB, PROJECTS_TAB];
