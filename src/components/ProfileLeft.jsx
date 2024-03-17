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
import general from "../data/general.json";

const ProfileLeft = () => {
  return (
    <Fragment>
      <PaperWrapper>
        <PaperTitle>About</PaperTitle>
        <AboutContent>
          <School fontSize="small" />
          {general.school}
        </AboutContent>
        <AboutContent>
          <LocationOn fontSize="small" />
          {general.location}
        </AboutContent>
        <AboutContent>
          <Home fontSize="small" />
          {general.home}
        </AboutContent>
        <AboutContent>
          <AlternateEmail fontSize="small" />
          {general.email}
        </AboutContent>
        <AboutContent>
          <Phone fontSize="small" />
          {general.phone}
        </AboutContent>
        <AboutContent>
          <CalendarMonth fontSize="small" />
          {general.dob}
        </AboutContent>
      </PaperWrapper>
      <PaperWrapper>
        <PaperTitle>General</PaperTitle>
        {general.generalDetails.map((detail, index) => (
          <General key={index}>{detail}</General>
        ))}
      </PaperWrapper>
      <PaperWrapper>
        <PaperTitle>Socials</PaperTitle>
        <SocialLink target="_blank" href={general.socials.facebook.link}>
          <Facebook fontSize="small" />
          <Typography className="text-1-line">{general.socials.facebook.title}</Typography>
        </SocialLink>
        <SocialLink target="_blank" href={general.socials.linkedin.link}>
          <LinkedIn fontSize="small" />
          <Typography className="text-1-line">{general.socials.linkedin.title}</Typography>
        </SocialLink>
        <SocialLink target="_blank" href={general.socials.github.link}>
          <GitHub fontSize="small" />
          <Typography className="text-1-line">{general.socials.github.title}</Typography>
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
