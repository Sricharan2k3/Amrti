import { Grid, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RegisterUserForm() {
  const navigate = useNavigate();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarSeverity, setSnackBarSeverity] = useState("success");

  const handleClose = () => setOpenSnackBar(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      passwordConfirm: data.get("passwordConfirm"),
    };

    try {
      const response = await fetch("http://localhost:4000/api/v1/amrti/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      console.log(result)

      if (response.ok) {
        setSnackBarMessage("Register Success");
        setSnackBarSeverity("success");
      } else {
        setSnackBarMessage(result.error || "Registration failed");
        setSnackBarSeverity("error");
      }
    } catch (error) {
      setSnackBarMessage("An error occurred");
      setSnackBarSeverity("error");
    }

    setOpenSnackBar(true);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              fullWidth
              autoComplete="name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="new-password"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="passwordConfirm"
              name="passwordConfirm"
              label="Confirm Password"
              fullWidth
              autoComplete="new-password"
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
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p className="m-0 p-0">Already have an account?</p>
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
        <Alert onClose={handleClose} severity={snackBarSeverity} sx={{ width: "100%" }}>
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
