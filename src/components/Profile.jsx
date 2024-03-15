import { memo, useContext } from "react";
import { Button, Grid } from "@mui/material";
import ProfileLeft from "./ProfileLeft";
import ProfileContactForm from "./ProfileContactForm";
import ProfileRight from "./ProfileRight";
import { AppContext } from "../App";

const Profile = () => {
  const { handleClickProjectsTab } = useContext(AppContext);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
        <ProfileLeft />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
        <ProfileContactForm />
        <ProfileRight />
        <Button fullWidth={true} size="large" onClick={handleClickProjectsTab} sx={{ textAlign: "center" }}>
          Do you want to see all of my projects?
        </Button>
      </Grid>
    </Grid>
  );
};

export default memo(Profile);
