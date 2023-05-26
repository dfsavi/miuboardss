"use client";

import { Avatar, Card, CardContent, CardHeader } from "@mui/material";
import React from "react";
import { Post } from "@/app/common/types";

export default function BasicPost(post: Post) {
  return (
    <Card className="w-full">
      <CardHeader
        avatar={<Avatar className="bg-gray-500">NN</Avatar>}
        title={post.title}
        subheader={post.subheader}
      ></CardHeader>
      <CardContent>
        Woow this is the example of my first post, if you post it will appear
        here
      </CardContent>
    </Card>
  );
}
