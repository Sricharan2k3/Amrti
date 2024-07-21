import * as React from "react";
import { Grid, TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, login } from "../../../State/Auth/Action";
import { useEffect } from "react";
import { useState } from "react";

export default function LoginUserForm({ handleNext }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const { auth } = useSelector((store) => store);
  const handleCloseSnakbar = () => setOpenSnackBar(false);
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  useEffect(() => {
    if (auth.user || auth.error) setOpenSnackBar(true);
    
  }, [auth.user, auth.error]);
  const handleSubmit = async (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);

  const userData = {
    email: data.get("email"),
    password: data.get("password"),
  };

try {
  const response = await fetch('https://amrti-main-backend.vercel.app/api/v1/amrti/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const result = await response.json();
  console.log(result);

  const token = result.token;
  console.log(token);

  // Set the JWT token in cookies
  if (token) {
    // Set the cookie with the token
    document.cookie = `jwtToken=${token}; path=/; secure; samesite=strict`;
    console.log("Token has been set in cookies");
  }
  
  console.log(result); // Handle the response data as needed

  // You might want to do something with the result here
} catch (error) {
  console.error('There was a problem with the fetch operation:', error);
}
  }

  return (
    <React.Fragment className=" shadow-lg ">
      <form className="w-full" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
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
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p className="m-0 p-0">don't have account ?</p>
          <Button
            onClick={() => navigate("/register")}
            className="ml-5"
            size="small"
          >
            Register
          </Button>
        </div>
      </div>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnakbar}
      >
        <Alert
          onClose={handleCloseSnakbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {auth.error ? auth.error : auth.user ? "Login Success" : ""}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
