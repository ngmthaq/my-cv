import { memo } from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import { PaperWrapper } from "./Styled";

const ProjectCard = ({
  id,
  name,
  image,
  customer,
  customerAvatar,
  teamMembers,
  position,
  description,
  technologies,
  onClick,
}) => {
  const project = { id, name, image, customer, customerAvatar, teamMembers, position, description, technologies };

  const projectId = `project-section-${id}`;

  return (
    <PaperWrapper id={projectId} sx={{ margin: 0, padding: 0 }}>
      <Container>
        <Modal onClick={() => onClick(project)} />
        <img src={image} alt={name} />
        <PaperIcon>
          <CustomerAvatar src={customerAvatar} alt={customer} />
        </PaperIcon>
        <HintText variant="caption">Image for illustrative purposes only</HintText>
        <ProjectName>{name}</ProjectName>
        <ProjectDesc>
          {position} | {teamMembers} {teamMembers === 1 ? "developer" : "developers"}
        </ProjectDesc>
      </Container>
    </PaperWrapper>
  );
};

export default memo(ProjectCard);

const Container = styled(Box)(() => ({
  width: "100%",
  aspectRatio: "1 / 1",
  cursor: "pointer",
  position: "relative",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

const Modal = styled(Box)(() => ({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  background: "linear-gradient(rgba(22, 28, 36, 0) 0%, rgb(22, 28, 36) 75%)",
}));

const CustomerAvatar = styled(Avatar)(() => ({
  width: "40px",
  height: "40px",
}));

const PaperIcon = styled(Paper)(() => ({
  width: "50px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  position: "absolute",
  top: "8px",
  left: "8px",
}));

const HintText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "16px",
  right: "8px",
  background: "#fff",
  display: "inline-block",
  padding: "4px 8px",
  borderRadius: "4px",
  cursor: "text",
  fontWeight: "600",
  fontSize: "12px",

  [theme.breakpoints.down("sm")]: {
    top: "unset",
    right: "unset",
    bottom: "72px",
    left: "8px",
  },
}));

const ProjectName = styled(Typography)(() => ({
  position: "absolute",
  bottom: "40px",
  left: "16px",
  color: "#fff",
  cursor: "text",
}));

const ProjectDesc = styled(Typography)(() => ({
  position: "absolute",
  bottom: "16px",
  left: "16px",
  color: "#fff",
  fontSize: "12px",
  opacity: "0.5",
  cursor: "text",
}));
