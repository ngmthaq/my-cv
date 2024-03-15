import { memo, useContext } from "react";
import { Button, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { AppContext } from "../App";
import projects from "../data/projects.json";

const Projects = () => {
  const { handleClickProfileTab } = useContext(AppContext);

  const handleClickButton = () => {
    handleClickProfileTab();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Grid container spacing={2} id="projects">
      {projects.map((project, index) => (
        <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={4}>
          <ProjectCard {...project} />
        </Grid>
      ))}
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Button
          fullWidth={true}
          size="large"
          onClick={handleClickButton}
          sx={{ textAlign: "center", marginBottom: "32px" }}>
          Back to profile page
        </Button>
      </Grid>
    </Grid>
  );
};

export default memo(Projects);
