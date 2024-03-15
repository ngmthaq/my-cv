import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PaperContainer = styled(Paper)(() => ({
  margin: "16px 0",
  overflow: "hidden",
  borderRadius: "8px",
}));

export const PaperWrapper = styled(Paper)(({ theme }) => ({
  overflow: "hidden",
  borderRadius: "8px",
  padding: "16px",
  margin: "16px 0",

  [theme.breakpoints.down("md")]: {
    marginTop: "0px",
  },
}));

export const PaperTitle = styled(Typography)(() => ({
  fontSize: "1.125rem",
  fontWeight: "700",
  paddingBottom: "16px",
}));
