import { Grid, TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../../State/Auth/Action";
import { Fragment, useEffect, useState } from "react";

export default function RegisterUserForm({ handleNext }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const { auth } = useSelector((store) => store);
  const handleClose = () => setOpenSnackBar(false);
const [step, setStep] = useState(1);
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  useEffect(() => {
    if (auth.user || auth.error) setOpenSnackBar(true);
   
  }, [auth.user,auth.error]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(step==1){
      const data = new FormData(event.currentTarget);
      // eslint-disable-next-line no-console
      const userData = {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        email: data.get("email"),
        password: data.get("password"),
        phone: data.get("phone"),
        step:1,
      };
      dispatch(register(userData));
      setStep(2)
    }
    else{
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      phone: data.get("phone"),
      step: 2,
      otp1: data.get("otp1"),
    };
    console.log("user data", userData);
    dispatch(register(userData));}
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="given-name"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="phone"
              name="phone"
              label="Phone No"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

          <Grid item xs={12}>
            {step === 1 && (
              <Button
                className="bg-[#9155FD] w-full"
                type="submit"
                variant="contained"
                size="large"
                sx={{ padding: ".8rem 0" }}
              >
                Send OTP
              </Button>
            )}
            {step === 2 && (
              <>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="otp1"
                    name="otp1"
                    label="otp"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <br />
                <Button
                  className="bg-[#9155FD] w-full"
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ padding: ".8rem 0" }}
                >
                  Verify OTP
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center ">
          <p className="m-0 p-0">Already have an account ?</p>
          <Button
            onClick={() => navigate("/login")}
            className="ml-5"
            size="small"
          >
            Login
          </Button>
        </div>
      </div>

      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {auth.error ? auth.error : auth.user ? "Register Success" : ""}
        </Alert>
      </Snackbar>
    </div>
  );
}
