import { Container, Grid, Box, Typography } from "@mui/material"
import React from "react"
import "./sixthsection.css"
import checkMark from "../../../images/FifthSection/Checkmark.png"
import LimitedCostly from "../../../images/SixthSection/LimitedCostly.png"
import Counter from "../../../images/SixthSection/Counter.png"

const SixthSection = () => {
  return (
    <Container className="otherFolks">
      <Box>
        <Grid container spacing={2} className="folksColumns">
          <Grid xl={6} lg={6} md={12} s={12} xs={12} display={"flex"}>
            <Box className="restBox">
              <Typography variant="h1" style={{ marginBottom: "10px" }}>
                The Other Folks
              </Typography>
              <Typography variant="h1" style={{ marginBottom: "10px" }}>
                Don't Make Tools
              </Typography>
              <Typography variant="h1" style={{ marginBottom: "10px" }}>
                for{" "}
                <span style={{ color: "#0b23cb", marginBottom: "10px" }}>
                  Small Business
                </span>
              </Typography>

              <Typography variant="h2">
                Don't be constrained by AI tools...
              </Typography>
              <Typography variant="h4">
                ...that make you pay per word or generate unusable content.
                Where’s the value in that? AIPRM has cost-effective plans AND
                creates content that provides results.
              </Typography>
              <Box
                mt={1}
                display={"flex"}
                flexDirection={"row-reverse"}
                alignItems={"baseline"}
                justifyContent={"flex-end"}
              >
                <Typography className="para">
                  Other resources lack the quality needed and limit your
                  capabilities.
                </Typography>
                <img className="checkMark" src={checkMark} alt="checkMark" />
              </Box>
              <Box
                mt={1}
                display={"flex"}
                flexDirection={"row-reverse"}
                alignItems={"baseline"}
                justifyContent={"flex-end"}
              >
                <Typography className="para">
                  ChatGPT has no limitations. You’re not paying by the word for
                  low quality.
                </Typography>
                <img className="checkMark" src={checkMark} alt="checkMark" />
              </Box>
            </Box>
          </Grid>
          <Grid item xl={6} lg={6} md={12} s={12} xs={12}>
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
                  <Typography>LIMITED AND COSTLY</Typography>
                  <img
                    src={LimitedCostly}
                    alt="limited"
                    width={"30px"}
                    style={{ margin: "0" }}
                  />
                </Box>
                <Box className="planning">
                  <Typography>
                    It shouldn't take hours to figure out how to use it
                  </Typography>
                </Box>
              </Box>
              <Box mt={2} textAlign={"center"}>
                <img src={Counter} alt="CounterIcon" className="CounterIcon" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default SixthSection
