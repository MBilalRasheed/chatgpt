import { Container, Grid, Box, Typography, Link } from "@mui/material"
import React from "react"
import "./elevensection.css"
import InstallForFree from "../../../images/EightSection/InstallforFree.png"
import Trophy from "../../../images/ElevenSection/Trophy.png"

const ElevenSection = () => {
  return (
    <Container className="levelPlaying">
      <Box>
        <Grid container spacing={2} className="playingColumns">
          <Grid h1 xl={6} lg={6} md={12} s={12} xs={12} display={"flex"}>
            <Box className="rightInfoBlock">
              <img src={Trophy} alt="trophy" />
            </Box>
          </Grid>
          <Grid xl={6} lg={6} md={12} s={12} xs={12} display={"flex"}>
            <Box className="restBox">
              <Typography variant="h1">Level the playing field</Typography>
              <Typography variant="h1">
                <span style={{ color: "#0b23cb", marginBottom: "10px" }}>
                  with your competitors
                </span>
              </Typography>

              <Typography variant="h2">
                Don't be the only one<br></br> missing out.
              </Typography>
              <Typography variant="h4">
                Over a million users are generating content using prompts from
                AIPRM. Some of them might be your competitors. Don’t let them
                have an unfair advantage.
              </Typography>
              <Box className="extenAllBox">
                <img
                  src={InstallForFree}
                  alt="InstallForFree"
                  className="InstallForFree"
                />
                <Typography variant="h6" marginLeft={"10px"}>
                  Already have the extension?
                  <br />
                  <Link> Subscribe to a Premium Plan.</Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default ElevenSection
