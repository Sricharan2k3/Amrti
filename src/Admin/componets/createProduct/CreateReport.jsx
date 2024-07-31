import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { Fragment } from "react";
import "./CreateProductForm.css";
import { createReport } from "../../../State/Report/Action";

const CreateReport = () => {
  const [productData, setProductData] = useState({
    batchNo: "",
    detail1: "",
    detail2: "",
    detail3: "",
    detail4: "",
    qrCode: "",
  });
  const dispatch = useDispatch();
  const {report} = useSelector((store) => store); // Access the updated report array
  const latestQRCode =
    report.length > 0 ? report[report.length - 1].qrCode : ""; // Assuming the latest report's QR code is what you want

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (latestQRCode) {
      setProductData((prevState) => ({
        ...prevState,
        qrCode: latestQRCode,
      }));
    }
  }, [latestQRCode]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newReport = await dispatch(createReport(productData));
      
      setProductData((prevState) => ({
        ...prevState,
        qrCode: newReport.qrCode,
      }));
    } catch (error) {
      console.error("Failed to create report:", error);
    }
  };

  return (
    <Fragment className="createProductContainer ">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center "
      >
        Add New Report
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="BatchName"
              name="batchNo"
              value={productData.batchNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Product Id"
              name="detail1"
              value={productData.detail1}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Drive link"
              name="detail2"
              value={productData.detail2}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="detail3"
              value={productData.detail3}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              size="large"
              type="submit"
            >
              Add Report
            </Button>
            {/* <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20 ml-10"
              size="large"
              onClick={()=>handleAddProducts(dressPage1)}
            >
              Add Products By Loop
            </Button> */}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {productData.qrCode && (
            <img
              src={productData.qrCode}
              alt="QR Code"
              style={{
                marginTop: "20px",
                maxWidth: "200px",
                maxHeight: "200px",
              }}
            />
          )}
        </Grid>
      </form>
    </Fragment>
  );
};

export default CreateReport;
