import { memo } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const HeadingAvatar = () => {
  return (
    <BoxContainer id="heading-avatar">
      <Avatar alt="Nguyen Manh Thang" src="/icon.png" sx={{ width: 160, height: 160 }} />
      <Box sx={{ paddingBottom: "24px" }}>
        <Typography variant="h4" sx={{ color: "#ffffff", marginBottom: "4px" }}>
          Nguyen Manh Thang
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#f0f0f0" }}>
          Software Engineer
        </Typography>
      </Box>
    </BoxContainer>
  );
};

export default memo(HeadingAvatar);

const BoxContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "16px",
  position: "absolute",
  bottom: "-32px",
  left: "16px",
  zIndex: "2",
}));
