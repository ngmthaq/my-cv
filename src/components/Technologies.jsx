import { memo, useContext } from "react";
import { Button, Paper, Grid } from "@mui/material";
import { PaperTitle } from "./Styled";
import technologies from "../data/technologies.json";
import { AppContext } from "../App";

const Technologies = () => {
  const { handleClickProfileTab } = useContext(AppContext);

  const handleClickButton = () => {
    handleClickProfileTab();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Grid container spacing={3} id="technologies">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <PaperTitle sx={{ marginTop: "24px" }}>TECHNOLOGIES</PaperTitle>
      </Grid>
      {technologies.map((tech, index) => (
        <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={4}>
          <Paper sx={{ padding: "16px", height: "200px" }} title={tech.name}>
            <img src={tech.logo} alt={tech.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </Paper>
        </Grid>
      ))}
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Button
          fullWidth={true}
          size="large"
          onClick={handleClickButton}
          sx={{ textAlign: "center", marginBottom: "32px" }}>
          Back to my profile page
        </Button>
      </Grid>
    </Grid>
  );
};

export default memo(Technologies);
