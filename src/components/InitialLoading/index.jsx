import { memo, useEffect, useState } from "react";
import { Fade } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Player } from "@lottiefiles/react-lottie-player";
import lottiefileConfigs from "../../assets/lottiefiles/initial-loading.json";

const InitialLoading = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  }, []);

  return (
    <Fade unmountOnExit in={isOpen} timeout={{ enter: 0, exit: 200 }}>
      <Container id="initial-loading">
        <Player autoplay loop src={lottiefileConfigs} style={{ width: "320px", height: "320px" }} />
      </Container>
    </Fade>
  );
};

export default memo(InitialLoading);

const Container = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "99999",
  background: "#fff",
}));
