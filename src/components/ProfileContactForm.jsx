import { memo, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Box, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material/styles";
import { Send } from "@mui/icons-material";
import { PaperWrapper } from "./Styled";
import { useSendFeedback } from "../firebase";
import Utils from "../utils";

const ProfileContactForm = () => {
  const { status, submit } = useSendFeedback();

  const [form, setForm] = useState({ name: "", email: "", content: "" });

  const handleChangeInput = (event) => {
    setForm((currentForm) => ({ ...currentForm, [event.target.name]: event.target.value }));
  };

  const handleSubmit = () => {
    if (form.name.trim().length === 0) {
      Swal.fire({
        icon: "error",
        title: "Failure Validation",
        text: "Please fill out all fields completely",
      });
    } else if (form.email.trim().length === 0) {
      Swal.fire({
        icon: "error",
        title: "Failure Validation",
        text: "Please fill out all fields completelyPlease fill out all fields completely",
      });
    } else if (form.content.trim().length === 0) {
      Swal.fire({
        icon: "error",
        title: "Failure Validation",
        text: "Please fill out all fields completelyPlease fill out all fields completely",
      });
    } else if (!Utils.Str.validateEmail(form.email)) {
      Swal.fire({
        icon: "error",
        title: "Failure Validation",
        text: "Please enter the correct email format",
      });
    } else {
      submit(form);
    }
  };

  useEffect(() => {
    if (status === "success") {
      Swal.fire({
        icon: "success",
        title: "Thank you",
        text: "I have received your response and will reply to you ASAP",
      });
    } else if (status === "error") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong, please try again later",
      });
    }
  }, [status]);

  return (
    <PaperWrapper>
      <form>
        <TextFieldWrapper>
          <CustomTextField
            fullWidth={true}
            type="text"
            name="name"
            placeholder="What is your name?"
            variant="outlined"
            onChange={handleChangeInput}
          />
          <CustomTextField
            fullWidth={true}
            type="email"
            name="email"
            placeholder="What is your email?"
            variant="outlined"
            onChange={handleChangeInput}
          />
        </TextFieldWrapper>
        <CustomTextField
          fullWidth={true}
          multiline={true}
          rows={6}
          sx={{ marginBottom: "16px" }}
          type="email"
          name="content"
          placeholder="Share what you are thinking here..."
          variant="outlined"
          onChange={handleChangeInput}
        />
        <ButtonWrapper display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="caption">Let me know if you need a software engineer</Typography>
          <LoadingButton
            type="button"
            variant="contained"
            size="large"
            loadingPosition="start"
            sx={{ borderRadius: "8px", minWidth: "120px" }}
            startIcon={<Send />}
            onClick={handleSubmit}
            loading={status === "loading"}>
            Send
          </LoadingButton>
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
