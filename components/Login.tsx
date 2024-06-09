/* eslint-disable react/no-unescaped-entities */
"use client";
import { STYLE_LOGIN } from "@/constant";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";
import PopoverCustom from "./Popover";
import Notification from "./Notification";
import { useRouter } from "next/navigation";

interface IFormInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const router = useRouter();
  const { handleSubmit, control } = useForm<IFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [open, setOpen] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);
  const [openNoti, setOpenNoti] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [title, setTitle] = React.useState("Login");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleTitle = (title: string) => {
    setTitle(title);
  };

  const onSubmit = handleSubmit(async (data) => {
    if (title === "Login") {
      router.replace(`/?email=${data.email}&password=${data.password}`);
      const resp = await fetch(`/api/login?email=${data.email}&password=${data.password}`)
        .then((res) => res.json())
        .catch((e) => console.log(e));
      if (resp.code === 400) {
        setOpenNoti(true);
        setMessage("Không tìm thấy người dùng");
        return;
      }
      setOpenNoti(true);
      setMessage("Đăng nhập thành công");
      setIsLogin(true);
      handleClose();
    }
  });

  const handleCloseNoti = () => {
    setOpenNoti(false);
    setMessage("");
  };
  return (
    <div>
      <Notification
        open={openNoti}
        handleCloseNoti={handleCloseNoti}
        message={message}
      />
      {isLogin ? (
        <PopoverCustom />
      ) : (
        <Button variant="outlined" onClick={handleClickOpen}>
          Login
        </Button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={STYLE_LOGIN}>
          <h1 className="mb-10 text-center text-3xl font-medium">{title}</h1>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                label="Email"
                variant="outlined"
                className="mb-6 w-full"
                autoComplete="no"
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <FormControl className="w-full mt-3" variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  {...field}
                />
              </FormControl>
            )}
          />
          <div className="mt-5 w-full">
            <Button
              variant="contained"
              className="w-full capitalize"
              onClick={onSubmit}
            >
              {title}
            </Button>
            <div className="mt-3">
              <span className="mr-2">Don't have an account?</span>
              <a
                className="text-[#1976d2] decoration-1 cursor-pointer underline"
                onClick={() =>
                  handleTitle(title === "Login" ? "Sign up" : "Login")
                }
              >
                {title === "Login" ? "Sign up" : "Login"}
              </a>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Login;
