import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddressForm from "./AddressForm";
import OrderSummary from "./OrderSummary";
import { useLocation, useNavigate } from "react-router-dom";

const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(1);
  const [skipped, setSkipped] = React.useState(new Set());
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const step = parseInt(queryParams.get("step")) || 0; // Parse step as an integer
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      const nextStep = prevActiveStep + 1;
      navigate(`/checkout?step=${nextStep}`);
      console.log("Next");
      return nextStep;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      const prevStep = prevActiveStep - 1;
      navigate(`/checkout?step=${prevStep}`);
      return prevStep;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    navigate(`/checkout?step=0`);
  };
  const handlePayment = () => {
    console.log(step)
  };


  return (
    <div style={{ paddingTop: "100px" }}>
      <Box className="px-5 lg:px-32 " sx={{ width: "100%" }}>
        <Stepper activeStep={step}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={step === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
            </Box>
            <div className="my-5">
              {step === 2 ? (
                <AddressForm handleNext={handleNext} />
              ) : step === 3 ? (
                <OrderSummary handleNext={handlePayment} />
              ) : (
                // Render content for other steps
                <div>Step {step + 1}</div>
              )}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
