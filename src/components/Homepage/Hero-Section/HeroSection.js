import React from "react"
import "./herosection.css"
import { Container, Grid, Box, Typography } from "@mui/material"
import example from "../../../images/example.png"
import RightColumnBox from "./RightColumnBox"

const HeroSection = () => {
  return (
    <Container className="HeroContainer">
      <Box>
        <Grid container spacing={2}>
          <Grid className="leftWrap" item lg={5} md={12} sm={12} xs={12}>
            <h2>AI Prompt Marketplace</h2>
            <h4>Prompt Engineering Community</h4>
            <h1>
              Solve Your
              <br />
              <span className="smallBusinessText">Small Business Problems</span>
              <br />
              <span>with 1-Click Prompts</span>
              <br />
              <span>
                for
                <span
                  style={{ color: "hsla(39,100%,68%,1)", marginLeft: "10px" }}
                >
                  ChatGPT
                </span>
              </span>
            </h1>
            <p>
              <span
                style={{
                  textDecoration: "underline",
                  fontWeight: "500",
                  marginRight: "10px",
                }}
              >
                Complete tasks in minutes
              </span>
              that used to take hours with our growing library of marketing,
              sales, operations, productivity, and customer support prompts.
            </p>
            <Box className="Mtrusted">
              <Box className="userBox">
                <Typography variant="h5" fontWeight={600} color={"#ffffff"}>
                  1M+ Users
                </Typography>
              </Box>
              <Box className="trustedBox">
                <Typography variant="h5" fontWeight={600} color={"#ffffff"}>
                  Trusted by over a million users and some of the world’s
                  biggest brands.
                </Typography>
                <Box className="personBox">
                  <img src={example} alt="person" />
                  <img src={example} alt="person" />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={7} md={12} sm={12} xs={12}>
            <Box className="rightBox">
              <RightColumnBox />
              <Box className="lastTextBox">
                <p>We ♥️ Small Businesses. Big businesses too.</p>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default HeroSection
