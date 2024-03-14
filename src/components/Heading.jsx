import { memo } from "react";
import HeadingCover from "./HeadingCover";
import HeadingNavbar from "./HeadingNavbar";
import { PaperContainer } from "./Styled";

const Heading = () => {
  return (
    <PaperContainer id="heading">
      <HeadingCover />
      <HeadingNavbar />
    </PaperContainer>
  );
};

export default memo(Heading);
