"use client";

import React from "react";
import { Button, Container, Grid, TextField } from "@mui/material";

export default function Feed() {
  return (
    <Container>
      <form className="w-full">
        <Grid container alignItems="center" md={12} spacing={2} className="p-5">
          <Grid item md={12}>
            <TextField
              className="w-full"
              variant="filled"
              label="username"
            ></TextField>
          </Grid>
          <Grid item md={12}>
            <TextField
              className="w-full"
              variant="filled"
              label="password"
            ></TextField>
          </Grid>
          <Grid item md={12}>
            <Button>Login</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
