import { Fragment, memo, useContext } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AccountCircle, Source } from "@mui/icons-material";
import { AppContext, PROFILE_TAB, PROJECTS_TAB } from "../App";

const HeadingNavbar = () => {
  const theme = useTheme();
  const isUpMD = useMediaQuery(theme.breakpoints.up("md"));
  const { tab, handleClickProfileTab, handleClickProjectsTab } = useContext(AppContext);

  return (
    <Container id="heading-navbar">
      {isUpMD && (
        <Fragment>
          <NavButton size="large" className={tab === PROFILE_TAB ? "active" : ""} onClick={handleClickProfileTab}>
            <AccountCircle />
            Profile
          </NavButton>
          <NavButton size="large" className={tab === PROJECTS_TAB ? "active" : ""} onClick={handleClickProjectsTab}>
            <Source />
            Projects
          </NavButton>
        </Fragment>
      )}
    </Container>
  );
};

export default memo(HeadingNavbar);

const Container = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "8px 16px",
  gap: "16px",
  minHeight: "60px",
}));

const NavButton = styled(Button)(() => ({
  color: "#999999",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  userSelect: "none",

  "&.active": {
    color: "#1e1e1e",
    borderRadius: "0px",
    pointerEvents: "none",
  },
}));
