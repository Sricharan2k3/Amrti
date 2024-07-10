import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import sesameImage from "./mint kombucha.jpg";
import ground from "./strawberry kombucha.jpg";
import mustard from "./lemon kombucha.jpg";
import saff from "./pomegranate kombucha.jpg";
import sun from "./ginger kombucha.jpg";
const data = [
  // Assuming each item in your data array represents a row in your table
  {
    heading: "",
    col1: { image: sun, title: "Ginger" },
    col2: { image: saff, title: "Pomegranate" },
    col3: { image: mustard, title: "Lemon" },
    col4: { image: ground, title: "Strawberry" },
    col5: { image: sesameImage, title: "Mint Mojito" },
  },
  // Add more rows as needed
  {
    heading: "Flavor",
    col1: "Tangy with a spicy kick",
    col2: "Tangy & sweet",
    col3: "Tangy",
    col4: "Sweet & fruity",
    col5: "Zesty",
  },
  {
    heading: "Flavour",
    col1: "Aids digestion and boosts immunity",
    col2: "Supports heart-health & reduces inflammation",
    col3: "Supports detoxification",
    col4: "Boosts immunity",
    col5: "Supports digestive health",
  },
  // Dummy data for illustration
  // ...
];
const Kombucha = () => {
  return (
    <Paper sx={{ overflowX: "auto" }}>
      <Grid container spacing={2}>
        {data.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {Object.entries(row).map(([key, value], colIndex) => (
              <Grid
                item
                xs={12}
                sm={2}
                key={key}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: colIndex % 2 === 0 ? "white" : "#f0f0f0",
                  padding: "20px",
                  border: "1px solid #e0e0e0",
                }}
              >
                {rowIndex === 0 && colIndex !== 0 ? (
                  <>
                    <img
                      src={value.image}
                      alt={value.title}
                      style={{
                        width: "auto",
                        height: "auto",
                        maxWidth: "120px",
                        marginTop: "20px",
                      }}
                    />
                    <Typography variant="body1">
                      <strong>{value.title}</strong>
                    </Typography>
                  </>
                ) : colIndex === 0 ? (
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {value}
                  </Typography>
                ) : rowIndex === 3 ? (
                  <ul style={{ padding: 0 }}>
                    {value.map((item, index) => (
                      <li key={index}>
                        <Typography variant="body2">{item}</Typography>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Typography variant="body1">{value}</Typography>
                )}
              </Grid>
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </Paper>
  );
};

export default Kombucha;
