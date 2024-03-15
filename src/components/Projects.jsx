import { memo } from "react";
import { Grid } from "@mui/material";

const Projects = () => {
  return (
    <Grid container id="projects">
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}></Grid>
    </Grid>
  );
};

export default memo(Projects);
