"use client";

import { Avatar, Card, CardContent, CardHeader } from "@mui/material";
import React from "react";

export default function BasicPost() {
  return (
    <Card className="w-full">
      <CardHeader
        avatar={<Avatar className="bg-gray-500">NN</Avatar>}
        title="No Name"
        subheader="December 01, 2023"
      ></CardHeader>
      <CardContent>
        Woow this is the example of my first post, if you post it will appear
        here
      </CardContent>
    </Card>
  );
}
