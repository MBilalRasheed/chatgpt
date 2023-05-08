import { Container, Grid, Box, Typography } from "@mui/material"
import React from "react"
import "./forthsection.css"
import HoursWasted from "../../../images/ForthSection/HoursWasted.png"
import Clock from "../../../images/ForthSection/Clock.png"

const FourthSection = () => {
  return (
    <Container className="avergeBusiness">
      <Box>
        <Grid container spacing={2} className="BusinessColumns">
          <Grid xl={7.5} lg={7.5} md={12} s={12} xs={12} display={"flex"}>
            <Box className="restBox">
              <Typography variant="h1" style={{ color: "#000000" }}>
                The Average Business owner Spends
              </Typography>
              <Typography variant="h1">
                100 Hours a month on Marketing
              </Typography>
              <Typography
                variant="h1"
                style={{ color: "#000000", marginBottom: "10px" }}
              >
                Use AIPRM to Stop Being Average.
              </Typography>
              <Typography variant="h2">
                Time is your most precious asset.
              </Typography>
              <Typography variant="h4">
                You know your business better than anyone, but all those other
                annoying business things? They're a time suck. ChatGPT can help
                you create content, but AIPRM can do it in your voice, quickly
                and creatively.
              </Typography>
            </Box>
          </Grid>
          <Grid item xl={4.5} lg={4.5} md={12} s={12} xs={12}>
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
                  <Typography>100 HOURS WASTED</Typography>
                  <img
                    src={HoursWasted}
                    alt="handIcon"
                    width={"30px"}
                    style={{ margin: "0" }}
                  />
                </Box>
                <Box className="planning">
                  <Typography>
                    That's over 4 full days you could have spent with your
                    family
                  </Typography>
                </Box>
              </Box>
              <Box mt={2} textAlign={"center"}>
                <img src={Clock} alt="ClockIcon" className="Clock" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default FourthSection
