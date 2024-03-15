import { Fragment, memo } from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Home,
  AlternateEmail,
  Facebook,
  GitHub,
  LinkedIn,
  LocationOn,
  Phone,
  School,
  CalendarMonth,
} from "@mui/icons-material";
import { PaperTitle, PaperWrapper } from "./Styled";

const ProfileLeft = () => {
  return (
    <Fragment>
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
          <Home fontSize="small" />
          Cong Ly, Ly Nhan, Ha Nam
        </AboutContent>
        <AboutContent>
          <AlternateEmail fontSize="small" />
          ngmthaq.20@gmail.com
        </AboutContent>
        <AboutContent>
          <Phone fontSize="small" />
          +84 38 988 4507
        </AboutContent>
        <AboutContent>
          <CalendarMonth fontSize="small" />
          01/12/2000 (DD/MM/YYYY)
        </AboutContent>
      </PaperWrapper>
      <PaperWrapper>
        <PaperTitle>General</PaperTitle>
        <General>
          - Experienced in many Frontend projects. Having knowledge of HTML, CSS, SCSS, JS, TS, jQuery, React.js,
          Vue.js, Bootstrap and Material UI.
        </General>
        <General>
          - Ability to work with backend through PHP and Laravel. Basic knowledge of Node.js and Electron.js.
        </General>
        <General>- Have basic knowledge of SQL queries, MySQL, SQLite.</General>
        <General>
          - Know how to use git commands, git tools such as Github Desktop, Jetbrains IDE Git Tools and Git Graph.
        </General>
        <General>- Used via Github, Gitlab and BitBucket.</General>
        <General>- Use Docker at a basic level.</General>
      </PaperWrapper>
      <PaperWrapper>
        <PaperTitle>Social</PaperTitle>
        <SocialLink target="_blank" href="https://www.facebook.com/ngmthaq/">
          <Facebook fontSize="small" />
          <Typography className="text-1-line">https://www.fb.com/ngmthaq/</Typography>
        </SocialLink>
        <SocialLink target="_blank" href="https://www.linkedin.com/in/ngmthaq/">
          <LinkedIn fontSize="small" />
          <Typography className="text-1-line">https://www.linkedin.com/in/ngmthaq/</Typography>
        </SocialLink>
        <SocialLink target="_blank" href="https://github.com/ngmthaq">
          <GitHub fontSize="small" />
          <Typography className="text-1-line">https://github.com/ngmthaq</Typography>
        </SocialLink>
      </PaperWrapper>
    </Fragment>
  );
};

export default memo(ProfileLeft);

const General = styled(Typography)(() => ({
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
