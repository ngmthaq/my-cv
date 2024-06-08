import { memo } from "react";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PaperWrapper } from "./Styled";
import { BusinessCenter, School } from "@mui/icons-material";

const ProfilePost = ({ image, isWorkspace, title, time, workType, id }) => {
  const sectionId = `profile-section-${id}`;

  return (
    <PaperWrapper id={sectionId}>
      <Heading>
        <Avatar alt="Nguyen Manh Thang" src="/icon.png" sx={{ width: 50, height: 50 }} />
        <Box>
          <Typography fontWeight="600">Nguyen Manh Thang</Typography>
          <Typography variant="caption">{time}</Typography>
        </Box>
      </Heading>
      <Body>
        <IconWrapper>
          <PaperIcon>
            {isWorkspace ? (
              <BusinessCenter fontSize="large" color="primary" />
            ) : (
              <School fontSize="large" color="primary" />
            )}
          </PaperIcon>
          <PaperIcon>
            <Avatar alt="Nguyen Manh Thang" src={image} sx={{ width: 50, height: 50 }} />
          </PaperIcon>
        </IconWrapper>
        <Typography fontWeight="600" marginBottom="8px">
          {title}
        </Typography>
        <Typography variant="subtitle1">{workType}</Typography>
      </Body>
    </PaperWrapper>
  );
};

export default memo(ProfilePost);

const Heading = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
}));

const Body = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px",

  "& *": {
    textAlign: "center",
  },
}));

const IconWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px",
  gap: "16px",
}));

const PaperIcon = styled(Paper)(() => ({
  marginBottom: "16px",
  width: "60px",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
}));
