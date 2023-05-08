import { Container, Grid, Box, Typography } from "@mui/material"
import React from "react"
import "./fifthsection.css"
import YellowHand from "../../../images/FifthSection/YellowHand.png"
import ClickIcon from "../../../images/FifthSection/ClickIcon.png"
import checkMark from "../../../images/FifthSection/Checkmark.png"

const FifthSection = () => {
  return (
    <Container className="restWrap">
      <Box>
        <Grid container spacing={2} className="restColumns">
          <Grid item xl={4} lg={4} md={12} s={12} xs={12}>
            <Box className="clickTemplate">
              <Box className="innerTemplate">
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "88%",
                    height: "70px",
                  }}
                >
                  <Typography>1-CLICK TEMPLATES</Typography>
                  <img
                    src={ClickIcon}
                    alt="handIcon"
                    width={"30px"}
                    style={{ margin: "0" }}
                  />
                </Box>
                <Box className="planning">
                  <Typography>
                    Take on planning, templates, messaging, and more with ease
                  </Typography>
                </Box>
              </Box>
              <Box mt={2} textAlign={"center"}>
                <img src={YellowHand} alt="handIcon" className="yellowHand" />
              </Box>
            </Box>
          </Grid>
          <Grid xl={8} lg={8} md={12} s={12} xs={12} display={"flex"}>
            <Box className="restBox">
              <Typography
                variant="h1"
                style={{ color: "#000000", marginBottom: "10px" }}
              >
                Play to Your Strengths
              </Typography>
              <Typography variant="h1">Let Us Help With the Rest</Typography>
              <Typography variant="h2">1-Click your Business Needs.</Typography>
              <Typography variant="h4">
                If you've ever used ChatGPT, you know it can be tricky to get
                the output you're looking for. Don't break your brain trying to
                craft the perfect prompt, use our 1-click templates. All you
                need is to bring the idea.
              </Typography>
              <Box
                mt={4}
                display={"flex"}
                justifyContent={"end"}
                alignItems={"baseline"}
              >
                <img className="checkMark" src={checkMark} alt="checkMark" />
                <Typography variant="h5" className="para">
                  AIPRM has turned ChatGPT into a resource anyone can use
                  regardless of their technical skills
                </Typography>
              </Box>
              <Box
                mt={1}
                display={"flex"}
                justifyContent={"end"}
                alignItems={"baseline"}
              >
                <img className="checkMark" src={checkMark} alt="checkMark" />
                <Typography variant="h5" className="para">
                  As far as you know, your competitors could already be
                  leveraging ChatGPT for their marketing efforts.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default FifthSection
