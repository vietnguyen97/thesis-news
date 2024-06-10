import { Button, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required("Trường bắt buộc, vui long nhập"),
    password: yup.string().required("Trường bắt buộc, vui long nhập"),
  })
  .required();

const NewPassword: React.FC<{
  handleBack: () => void;
  setOpenNoti: (e: boolean) => void;
  setMessage: (e: string) => void;
}> = ({ handleBack, setMessage, setOpenNoti }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<{
    email: string;
    password: string;
  }>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit(async (data) => {
    const resp = await fetch("`http://localhost:8080/user/reset-password", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    })
      .then((result) => result.json())
      .catch((e) => console.log(e));

    if (resp.statusCode !== 200) {
      setOpenNoti(true);
      setMessage(resp?.data?.message);
      return;
    }
    setOpenNoti(true);
    setMessage(resp?.data?.message);
    handleBack();
  });
  return (
    <>
      <div>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              label="Email"
              placeholder="Vui lòng nhập email"
              variant="outlined"
              className="w-full"
              autoComplete="no"
              {...field}
            />
          )}
        />
        <p className="text-[red]">{errors.email?.message}</p>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              label="Password"
              placeholder="Vui lòng nhập password"
              variant="outlined"
              className="w-full mt-5"
              autoComplete="no"
              {...field}
            />
          )}
        />
        <p className="text-[red]">{errors.password?.message}</p>
      </div>
      <div className="mt-5 w-full">
        <Button
          variant="contained"
          className="w-full capitalize"
          onClick={onSubmit}
        >
          Xác nhận
        </Button>
      </div>
    </>
  );
};

export default NewPassword;
