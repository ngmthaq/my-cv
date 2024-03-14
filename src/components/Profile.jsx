import { memo } from "react";
import { Grid, Typography } from "@mui/material";
import { PaperTitle, PaperWrapper } from "./Styled";
import { styled } from "@mui/material/styles";
import { AlternateEmail, Facebook, GitHub, LinkedIn, LocationOn, Phone, School } from "@mui/icons-material";

const Profile = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
        <PaperWrapper>
          <PaperTitle>About</PaperTitle>
          <AboutContent>
            <School fontSize="small" />
            Thuong Mai University
          </AboutContent>
          <AboutContent>
            <LocationOn fontSize="small" />
            Phu Do, Nam Tu Liem, Ha Noi
          </AboutContent>
          <AboutContent>
            <AlternateEmail fontSize="small" />
            ngmthaq.20@gmail.com
          </AboutContent>
          <AboutContent>
            <Phone fontSize="small" />
            038 988 4507
          </AboutContent>
        </PaperWrapper>
        <PaperWrapper>
          <PaperTitle>Story</PaperTitle>
          <Story>
            - Experienced in many Frontend projects. Having knowledge of HTML, CSS, SCSS, JS, TS, jQuery, React.js,
            Vue.js, Bootstrap and Material UI.
          </Story>
          <Story>
            - Ability to work with backend through PHP language and Laravel framework. Basic knowledge of Node.js and
            Electron.js.
          </Story>
          <Story>
            - Have basic knowledge of SQL, have used through database management systems such as: MySQL, SQLite.
          </Story>
          <Story>
            - Know how to use git commands, in addition to using other git tools such as Github Desktop, Jetbrains IDE
            Git Tools and Git Graph to solve git-related problems.
          </Story>
          <Story>- Used via Github, Gitlab and BitBucket.</Story>
          <Story>- Use Docker at a basic level.</Story>
        </PaperWrapper>
        <PaperWrapper>
          <PaperTitle>Social</PaperTitle>
          <SocialLink target="_blank" href="https://www.facebook.com/ngmthaq/">
            <Facebook fontSize="small" />
            <Typography className="text-1-line">https://www.fb.com/ngmthaq/</Typography>
          </SocialLink>
          <SocialLink target="_blank" href="https://www.linkedin.com/in/nguyen-manh-thang-62b589157/">
            <LinkedIn fontSize="small" />
            <Typography className="text-1-line">https://www.linkedin.com/in/nguyen-manh-thang-62b589157/</Typography>
          </SocialLink>
          <SocialLink target="_blank" href="https://github.com/ngmthaq">
            <GitHub fontSize="small" />
            <Typography className="text-1-line">https://github.com/ngmthaq</Typography>
          </SocialLink>
        </PaperWrapper>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={8} xl={8}></Grid>
    </Grid>
  );
};

export default memo(Profile);

const Story = styled(Typography)(() => ({
  marginBottom: "8px",
}));

const AboutContent = styled(Typography)(() => ({
  marginBottom: "8px",
  display: "flex",
  alignItems: "center",
  gap: "16px",
}));

const SocialLink = styled("a")(({ theme }) => ({
  marginBottom: "16px",
  display: "flex",
  alignItems: "center",
  gap: "16px",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));
