import { memo } from "react";
import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import HeadingAvatar from "./HeadingAvatar";
import cover from "../assets/images/cover.jpg";
import { Menu } from "@mui/icons-material";

const HeadingCover = () => {
  return (
    <Container id="heading-cover">
      <img src={cover} alt="cover" />
      <Modal />
      <HeadingAvatar />
      <DrawerButton size="large">
        <Menu fontSize="large" htmlColor="#fff" />
      </DrawerButton>
    </Container>
  );
};

export default memo(HeadingCover);

const Container = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: "240px",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: "0",
  },
}));

const Modal = styled(Box)(() => ({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  background: "linear-gradient(rgba(0, 75, 80, 0.8), rgba(0, 75, 80, 0.8))",
  zIndex: "1",
}));

const DrawerButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "8px",
  right: "8px",
  zIndex: "2",
  display: "none",

  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));
