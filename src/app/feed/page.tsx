"use client";

import React from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import BasicPost from "@/components/basicPost";
import { GetServerSideProps } from "next";
import { Post } from "../common/types";

export default function Feed() {
  let createPosts = (numberOfPosts: number): Post[] => {
    let posts: Post[] = [];
    for (let i = 0; i < numberOfPosts; i++) {
      posts.push({
        id: i,
        title: "This is an example title",
        subheader: "subheader",
        date: Date.now(),
      });
    }
    return posts;
  };

  let posts: Post[] = createPosts(10);

  return (
    <Container className="w-full">
      <Grid container alignItems="center" spacing={2} className="p-5">
        {posts.map((post, i) => (
          <Grid item md={12} key={i}>
            <BasicPost
              id={post.id}
              title={post.title}
              subheader={post.subheader}
              date={post.date}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
