import { memo } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PaperWrapper } from "./Styled";
import { Send } from "@mui/icons-material";

const ProfileContactForm = () => {
  return (
    <PaperWrapper>
      <form>
        <Box display="flex" alignItems="center" gap="16px" marginBottom="16px">
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
        </Box>
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
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="caption">Let me know if you need a software engineer</Typography>
          <Button
            type="button"
            variant="contained"
            size="large"
            sx={{ borderRadius: "8px", minWidth: "120px" }}
            startIcon={<Send />}>
            Send
          </Button>
        </Box>
      </form>
    </PaperWrapper>
  );
};

export default memo(ProfileContactForm);

export const CustomTextField = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    borderRadius: "6px",
  },
}));
