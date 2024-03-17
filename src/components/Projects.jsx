import { Fragment, memo, useContext, useState } from "react";
import { Button, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { AppContext } from "../App";
import projects from "../data/projects.json";
import ProjectDetailDialog from "./ProjectDetailDialog";
import { PaperTitle } from "./Styled";

const Projects = () => {
  const { handleClickTechnologiesTab } = useContext(AppContext);

  const [selectedProject, setSelectedProject] = useState(null);

  const handleClickButton = () => {
    handleClickTechnologiesTab();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
  };

  return (
    <Fragment>
      <Grid container spacing={2} id="projects">
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <PaperTitle sx={{ marginTop: "24px" }}>MY PROJECTS</PaperTitle>
        </Grid>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={4}>
            <ProjectCard {...project} onClick={setSelectedProject} />
          </Grid>
        ))}
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Button
            fullWidth={true}
            size="large"
            onClick={handleClickButton}
            sx={{ textAlign: "center", marginBottom: "32px" }}>
            Let see my tech stacks
          </Button>
        </Grid>
      </Grid>
      <ProjectDetailDialog open={Boolean(selectedProject)} project={selectedProject} onClose={handleCloseDialog} />
    </Fragment>
  );
};

export default memo(Projects);
