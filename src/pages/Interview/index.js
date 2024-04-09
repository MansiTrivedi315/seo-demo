"use client";

import axios from "axios";
import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Head from "next/head";

const InterviewPage = ({ interviewsList }) => {
  useEffect(() => {
    console.log("result", interviewsList);
  }, [interviewsList]);

  return (
    <div>
      <Head>
        <title>{interviewsList?.IRE_MetaOgImageType}</title>
        <meta name="description" content="Your page description" />
      </Head>
      <h1>InterviewPage</h1>
      <Grid container spacing={2}>
        {interviewsList?.interviews?.map((d,i) => {
          return (
            <Grid item xs={3} key={i}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={d.IRE_Image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {d.IRE_Title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {d.IRE_SpecialOfferLine}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

InterviewPage.getInitialProps = async () => {
  try {
    const res = await axios.get("https://api.talentbattle.in/mockinterviews");
    const data = await res.data.Data;
    return { interviewsList: data };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { interviewsList: "hello" };
  }
};

export default InterviewPage;
