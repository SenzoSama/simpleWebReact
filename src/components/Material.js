import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Adder from "./Adder";
import Viewer from "./Viewer";
import "../App.css";

function Material() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Adder />
        </Grid>
        <Grid item xs={12}>
          <Viewer />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Material;
