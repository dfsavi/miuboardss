"use client";

import React from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import BasicPost from "@/components/basicPost";

export default function Feed() {
  return (
    <Container className="w-full">
      <Grid container alignItems="center" md={12} spacing={2} className="p-5">
        <Grid item md={12}>
          <BasicPost></BasicPost>
        </Grid>
      </Grid>
    </Container>
  );
}
