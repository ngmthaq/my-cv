import { memo } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { InitialLoading } from "../../components";

const BaseLayout = () => {
  return (
    <Container id="base-layout">
      <InitialLoading />
      <Wrapper id="base-layout-children">
        <Outlet />
      </Wrapper>
    </Container>
  );
};

export default memo(BaseLayout);

const Container = styled(Box)(() => ({}));

const Wrapper = styled(Box)(() => ({}));
