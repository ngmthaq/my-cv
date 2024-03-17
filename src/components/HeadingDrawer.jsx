import { memo, useContext } from "react";
import { Box, Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AppContext, PROFILE_TAB, PROJECTS_TAB, TECHNOLOGIES_TAB } from "../App";
import logo from "../assets/images/cover.jpg";

const HeadingDrawer = ({ open, onClose }) => {
  const { tab, handleClickProfileTab, handleClickProjectsTab, handleClickTechnologiesTab } = useContext(AppContext);

  const handleClickProfile = () => {
    handleClickProfileTab();
    onClose();
  };

  const handleClickProjects = () => {
    handleClickProjectsTab();
    onClose();
  };

  const handleClickTechnologies = () => {
    handleClickTechnologiesTab();
    onClose();
  };

  return (
    <MobileDrawer anchor="right" open={open} onClose={onClose}>
      <MobileDrawerLogo>
        <img src={logo} alt="logo" />
      </MobileDrawerLogo>
      <MobileDrawerNav>
        <a className={tab === PROFILE_TAB ? "active" : ""} onClick={handleClickProfile}>
          Profile
        </a>
        <a className={tab === PROJECTS_TAB ? "active" : ""} onClick={handleClickProjects}>
          Projects
        </a>
        <a className={tab === TECHNOLOGIES_TAB ? "active" : ""} onClick={handleClickTechnologies}>
          Technologies
        </a>
      </MobileDrawerNav>
    </MobileDrawer>
  );
};

export default memo(HeadingDrawer);

export const MobileDrawer = styled(Drawer)(() => ({
  "& .MuiPaper-root": {
    maxWidth: "80vw",
    width: "400px",
    borderRadius: "12px 0 0 0",
    background: "#1E1E1E",
  },
}));

export const MobileDrawerLogo = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,

  "& img": {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
}));

export const MobileDrawerNav = styled("nav")(({ theme }) => ({
  height: "100%",
  width: "100%",
  padding: "16px",

  "& a": {
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "30px",
    letterSpacing: "0em",
    textAlign: "left",
    textTransform: "uppercase",
    userSelect: "none",
    display: "block",
    marginBottom: "16px",
    color: theme.palette.grey[600],

    "&.active": {
      color: "#fff",
      cursor: "default",
      pointerEvents: "none",
    },
  },
}));
