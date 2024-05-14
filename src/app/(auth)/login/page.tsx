"use client";
import KenButton from "@/components/KenComponents/KenButton";
import { LoginData } from "@/interfaces/Auth";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useStyles } from "../styles.module";
import Image from "next/image";
import { Images } from "@/assets/assetHelper";
import { REGEX } from "@/helpers/constant";
import KenColors from "@/helpers/themes/kenColors";
import KenInput from "@/components/KenComponents/KenInput";
import Link from "next/link";
import KenLoader from "@/components/KenComponents/KenLoader";

const Login = () => {
  const classes = useStyles();
  const { control, handleSubmit } = useForm<LoginData>({ mode: "onChange" });
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = () => {
    // setLoading(true);
    console.log("Logged in");
  };

  return (
    <>
      {loading && <KenLoader />}
      <Box className={classes.loginForm}>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className={classes.fieldLayout}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            marginBottom={"60px"}
          >
            <Image
              src={Images.DefaultOrganizationLogo}
              alt="Logo"
              height={72}
              width={82}
            />
            <Typography className={classes.logoTypo}>Ken42</Typography>
          </Box>
          <Box>
            <Box mb={2} width="100%">
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Please enter your email ID",
                  pattern: {
                    value: REGEX.EMAIL,
                    message: "Please Enter a valid email ID",
                  },
                  maxLength: {
                    value: 100,
                    message: "This field cannot be more than 100 characters",
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Typography className={classes.label}>
                      Email
                      <span style={{ color: KenColors.red, marginLeft: "2px" }}>
                        *
                      </span>
                    </Typography>
                    <KenInput
                      errorMessage={true}
                      hideLabel={true}
                      placeholder="Email"
                      error={error?.message || error?.type}
                      InputProps={{ className: classes.inputStyles }}
                      {...field}
                    />
                  </>
                )}
              />
            </Box>
            <Box mb={2} width="100%">
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Please enter your password",
                  maxLength: {
                    value: 100,
                    message: "This field cannot be more than 100 characters",
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Typography className={classes.label}>
                      Enter password
                      <span style={{ color: KenColors.red, marginLeft: "2px" }}>
                        *
                      </span>
                    </Typography>
                    <KenInput
                      errorMessage={true}
                      hideLabel={true}
                      type="password"
                      placeholder="Password"
                      error={error?.message || error?.type}
                      InputProps={{ className: classes.inputStyles }}
                      {...field}
                    />
                  </>
                )}
              />
              <Link
                href={"/"}
                style={{ float: "right" }}
                className={classes.forgotPwd}
              >
                Forgot Password ?
              </Link>
            </Box>
          </Box>
          <KenButton
            buttonClass={classes.verify}
            // disabled={loading}
            type="submit"
          >
            Login
          </KenButton>
        </form>
      </Box>
    </>
  );
};

export default Login;
