import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/lab";
const Register = () => {
  return (
    <Formik
      initialValues={{
        FirstName: "",
        LastName: "",
        email: "",
        password: "",
        dob: "",
      }}
      validationSchema={yup.object({
        FirstName: yup
          .string()
          .required("First Name is required")
          .max(100, "First Name must be at max 100 characters."),
        LastName: yup
          .string()
          .required("Last Name is required")
          .max(100, "Last Name must be at max 100 characters."),

        email: yup
          .string()
          .email("Must be a valid email.")
          .lowercase()
          .required("Email is required.")
          .max(100, "Email must be at max 100 characters.")
          .trim(),
        password: yup.string().required("Password is required.").trim(),
        dob: yup.date().required(),
      })}
      onSubmit={(values) => {
        alert("Form Submitted");
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
              gap: "1rem",
              width: "350px",
            }}
          >
            <Typography variant="h4">Register</Typography>
            <FormControl fullWidth>
              <TextField
                label="First Name"
                {...formik.getFieldProps("FirstName")}
              />

              {formik.touched.FirstName && formik.errors.FirstName ? (
                <FormHelperText sx={{ fontSize: "1rem" }} error>
                  {formik.errors.FirstName}
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="Last Name"
                {...formik.getFieldProps("LastName")}
              />

              {formik.touched.LastName && formik.errors.LastName ? (
                <FormHelperText sx={{ fontSize: "1rem" }} error>
                  {formik.errors.LastName}
                </FormHelperText>
              ) : null}
            </FormControl>
            {/* <FormControl> */
            /* <DatePicker
                label="DOB"
                value={formik.values.dob}
                onChange={(newValue) => setValue(newValue)}
              />
              {formik.touched.dob && formik.errors.dob ? (
                <FormHelperText sx={{ fontSize: "1rem" }} error>
                  {formik.errors.dob}
                </FormHelperText>
              ) : null}
            </FormControl> */}

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

            <Button
              fullWidth
              variant="contained"
              color="secondary"
              type="submit"
            >
              submit
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default Register;
