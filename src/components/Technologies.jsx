import { memo } from "react";
import { Paper, Grid } from "@mui/material";
import { PaperTitle } from "./Styled";
import technologies from "../data/technologies.json";

const Technologies = () => {
  return (
    <Grid container spacing={3} id="technologies">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <PaperTitle sx={{ marginTop: "24px" }}>MY TECHNOLOGIES</PaperTitle>
      </Grid>
      {technologies.map((tech, index) => (
        <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={4}>
          <Paper sx={{ padding: "16px", height: "200px" }}>
            <img
              src={tech.logo}
              alt={tech.name}
              title={tech.name}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Paper>
        </Grid>
      ))}
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <PaperTitle sx={{ marginBottom: "32px" }} />
      </Grid>
    </Grid>
  );
};

export default memo(Technologies);
