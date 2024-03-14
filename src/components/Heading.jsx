import { memo } from "react";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import HeadingCover from "./HeadingCover";
import HeadingNavbar from "./HeadingNavbar";

const Heading = () => {
  return (
    <PaperContainer id="heading">
      <HeadingCover />
      <HeadingNavbar />
    </PaperContainer>
  );
};

export default memo(Heading);

const PaperContainer = styled(Paper)(() => ({
  margin: "32px 0",
  overflow: "hidden",
  borderRadius: "16px",
}));
