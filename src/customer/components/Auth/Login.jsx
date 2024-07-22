import * as React from "react";
import { Grid, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function LoginUserForm() {
  const navigate = useNavigate();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarSeverity, setSnackBarSeverity] = useState("success");

  const handleCloseSnackBar = () => setOpenSnackBar(false);

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
        throw new Error('Invalid credentials');
      }

      const result = await response.json();
      const token = result.token;

      if (token) {
        document.cookie = `jwtToken=${token}; path=/; secure; samesite=strict`;
        localStorage.setItem("jwt", token); // Save the token in local storage
        setSnackBarMessage("Login Success");
        setSnackBarSeverity("success");
        setOpenSnackBar(true);
        // Update the navbar here, for example by reloading the page
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      setSnackBarMessage(error.message);
      setSnackBarSeverity("error");
      setOpenSnackBar(true);
    }
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      // Optionally, you can verify the JWT by making a backend call to get user info
    }
  }, []);

  return (
    <React.Fragment>
      <form className="w-full" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
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
          <p className="m-0 p-0">Don't have an account?</p>
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
        onClose={handleCloseSnackBar}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity={snackBarSeverity}
          sx={{ width: "100%" }}
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
