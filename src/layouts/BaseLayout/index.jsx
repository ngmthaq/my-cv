import { memo } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { InitialLoading } from "../../components";

const BaseLayout = ({ children }) => {
  return (
    <Container id="base-layout">
      <InitialLoading />
      <Wrapper id="base-layout-children">{children}</Wrapper>
    </Container>
  );
};

export default memo(BaseLayout);

const Container = styled(Box)(() => ({}));

const Wrapper = styled(Box)(() => ({}));
