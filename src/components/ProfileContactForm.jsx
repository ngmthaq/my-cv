import { memo } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PaperWrapper } from "./Styled";
import { Send } from "@mui/icons-material";

const ProfileContactForm = () => {
  return (
    <PaperWrapper>
      <form>
        <TextFieldWrapper>
          <CustomTextField
            required={true}
            fullWidth={true}
            type="text"
            name="name"
            placeholder="What is your name?"
            variant="outlined"
          />
          <CustomTextField
            required={true}
            fullWidth={true}
            type="email"
            name="email"
            placeholder="What is your email?"
            variant="outlined"
          />
        </TextFieldWrapper>
        <CustomTextField
          fullWidth={true}
          required={true}
          multiline={true}
          rows={6}
          sx={{ marginBottom: "16px" }}
          type="email"
          name="content"
          placeholder="Share what you are thinking here..."
          variant="outlined"
        />
        <ButtonWrapper display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="caption">Let me know if you need a software engineer</Typography>
          <Button
            type="button"
            variant="contained"
            size="large"
            sx={{ borderRadius: "8px", minWidth: "120px" }}
            startIcon={<Send />}>
            Send
          </Button>
        </ButtonWrapper>
      </form>
    </PaperWrapper>
  );
};

export default memo(ProfileContactForm);

const TextFieldWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginBottom: "16px",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const CustomTextField = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    borderRadius: "6px",
  },
}));

const ButtonWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",

    "& > span": {
      textAlign: "center",
      display: "block",
      marginBottom: "16px",
    },

    "& > button": {
      width: "100%",
    },
  },
}));
