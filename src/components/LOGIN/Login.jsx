import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="nav">
        <div>
          <i class="bi bi-flower3 log">
            <span class="logo">Thrift & Thread</span>
          </i>
        </div>
        <div>
          <ul className="list">
            <a href="/">
              <li>HOME</li>
            </a>

            <a href="/about">
              <li>ABOUT</li>
            </a>

            <a href="/men">
              <li>MEN</li>
            </a>
            <a href="/women">
              <li>WOMEN</li>
            </a>
            <a href="/contact">
              <li>CONTACT US</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="login-hero">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={yup.object({
            email: yup
              .string()
              .email("Must be a valid email.")
              .lowercase()
              .required("Email is required.")
              .max(100, "Email must be at max 100 characters.")
              .trim(),
            password: yup.string().required("Password is required.").trim(),
          })}
          onSubmit={(values) => {
            alert("LOGIN SUCCESSFUL");
            console.log(values);
          }}
        >
          {(formik) => {
            return (
              <form
                onSubmit={formik.handleSubmit}
                style={{
                  boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  width: "300px",
                }}
              >
                <Typography variant="h4">Login</Typography>

                <FormControl fullWidth>
                  <TextField label="Email" {...formik.getFieldProps("email")} />

                  {formik.touched.email && formik.errors.email ? (
                    <FormHelperText sx={{ fontSize: "1rem" }} error>
                      {formik.errors.email}
                    </FormHelperText>
                  ) : null}
                </FormControl>

                <FormControl fullWidth>
                  <TextField
                    label="Password"
                    {...formik.getFieldProps("password")}
                  />

                  {formik.touched.password && formik.errors.password ? (
                    <FormHelperText sx={{ fontSize: "1rem" }} error>
                      {formik.errors.password}
                    </FormHelperText>
                  ) : null}
                </FormControl>
                <div className="login">
                  <p className="text">Don't have an account?</p>
                  <a href="/register">
                    <p className="text">REGISTER HERE.</p>
                  </a>
                  <p className="text">OR</p>
                  <p className="text">LOG IN WITH:</p>
                  <div>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-google"></i>
                    <i class="bi bi-instagram"></i>
                  </div>
                </div>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  type="submit"
                >
                  LOG IN
                </Button>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
