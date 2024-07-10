import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import sesameImage from './sesame oil square.jpg'
import ground from './groundnut square.jpg'
import mustard from './mustard oil square.jpg'
import saff from './safflower oil square.jpg'
import sun from './sunflower square.jpg'
const data = [
  // Assuming each item in your data array represents a row in your table
  {
    heading: "",
    col1: { image: sun, title: "Sunflower Oil" },
    col2: { image: saff, title: "Safflower Oil" },
    col3: { image: mustard, title: "Mustard Oil" },
    col4: { image: ground, title: "Groundnut Oil" },
    col5: { image: sesameImage, title: "Sesame Oil" },
  },
  // Add more rows as needed
  {
    heading: "Special Ingredient",
    col1: "Linoleic Acid",
    col2: "Linoleic Acid",
    col3: "Allyl isothiocyanate",
    col4: "Resveratrol",
    col5: "Sesamol",
  },
  {
    heading: "Flavour",
    col1: "Mild and neutral",
    col2: "Mild and neutral",
    col3: "Pungent and sharp",
    col4: "Nutty and slightly sweet",
    col5: "Rich and nutty with a  toasted aroma",
  },
  {
    heading: "Nutritional Value",
    col1: [
      "Calories: 124 kcal",
      "Total Fat: 14 g",
      "Saturated Fat: 1.4 g",
      "Monounsaturated Fat: 9.9 g",
      "Polyunsaturated Fat: 3.8 g",
      "Vitamin E: 5.6 mg (28% DV)",
    ],
    col2: [
      "Calories: 120 kcal",
      "Total Fat: 14 g",
      "Saturated Fat: 1 g",
      "Monounsaturated Fat: 10 g",
      "Polyunsaturated Fat: 3 g",
      "Vitamin E: 4.6 mg (23% DV)",
    ],
    col3: [
      "Calories: 124 kcal",
      "Total Fat: 14 g",
      "Saturated Fat: 1.1 g",
      "Monounsaturated Fat: 3.9 g",
      "Polyunsaturated Fat: 6.6 g",
      "Omega-3 Fatty Acids: 3.9 g",
      "Omega-6 Fatty Acids: 6.6 g",
    ],
    col4: [
      "Calories: 120 kcal",
      "Total Fat: 14 g",
      "Saturated Fat: 2.3 g",
      "Monounsaturated Fat: 6.2 g",
      "Polyunsaturated Fat: 4.3 g",
      "Vitamin E: 11.2 mg (56% DV)",
    ],
    col5: [
      "Calories: 120 kcal",
      "Total Fat: 14 g",
      "Saturated Fat: 2 g",
      "Monounsaturated Fat: 5 g",
      "Polyunsaturated Fat: 6 g",
      "Vitamin K: 5.5 mcg (7% DV)",
    ],
  },
  {
    heading: "Uses",
    col1: "Frying, sauteing, salad-dressings",
    col2: "Cooking, baking, salad dressings, skincare",
    col3: "Cooking, tempering, marinating, massage",
    col4: "Frying, salad-dressings, stir frying",
    col5: "Stir-frying, salad dressings, marinades, finishing oil",
  },
  {
    heading: "Benefits",
    col1: "Reduces total and LDL cholesterol, improves insulin sensitivity, and regulates blood pressure",
    col2: "Reduces total and LDL cholesterol, improves insulin sensitivity, and regulates blood pressure",
    col3: "Stimulates digestion, supports in heart-health and exhibits anti-inflammatory properties.",
    col4: "SupportS heart health and aids in reducing inflammation",
    col5: "Supports heart health and exhibits anti-inflammatory properties",
  },
  // Dummy data for illustration
  // ...
];
const Compare = () => {
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
                  backgroundColor: colIndex % 2 === 0 ? "#f0f0f0" : "white",
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

export default Compare;

