import { Container, Grid, Box, Typography, Link } from "@mui/material"
import React from "react"
import "./eightsection.css"
import DifficultIcon from "../../../images/EightSection/DifficultIcon.png"
import keyboardCoding from "../../../images/EightSection/keyboardCodingnew.png"
import InstallForFree from "../../../images/EightSection/InstallforFree.png"

const EightSection = () => {
  return (
    <Container className="saveTime">
      <Box>
        <Grid container spacing={2} className="timeColumns">
          <Grid xl={6} lg={6} md={12} s={12} xs={12} display={"flex"}>
            <Box className="restBox">
              <Typography variant="h1" style={{ marginBottom: "10px" }}>
                Save time by
              </Typography>
              <Typography variant="h1" style={{ marginBottom: "10px" }}>
                standing on the shoulders of
              </Typography>
              <Typography variant="h1">
                <span style={{ color: "#0b23cb", marginBottom: "10px" }}>
                  prompt engineering giants
                </span>
              </Typography>

              <Typography variant="h2">No coding necessary</Typography>
              <Typography variant="h4">
                You don’t need a background in engineering to use ChatGPT
                anymore. You just need AIPRM. We’ve taken the time to
                experiment, all you need to do is pick the prompt and click.
              </Typography>
            </Box>
          </Grid>
          <Grid h1 xl={6} lg={6} md={12} s={12} xs={12}>
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
                  <Typography textTransform={"uppercase"}>
                    Difficult to Understand
                  </Typography>
                  <img
                    src={DifficultIcon}
                    alt="limited"
                    width={"30px"}
                    style={{ margin: "0" }}
                  />
                </Box>
                <Box className="planning">
                  <Typography>
                    Stop spending hours figuring out what prompts work.
                  </Typography>
                </Box>
              </Box>
              <Box mt={2} textAlign={"center"}>
                <img
                  src={keyboardCoding}
                  alt="keyboardCodingIcon"
                  className="KeyboardCoding"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="extendedText" mt={5}>
          <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
            <Typography variant="h4">
              Download our free Chrome Extension today to get your time back
            </Typography>
            <Typography variant="h6">
              Already have the extension?{" "}
              <Link> Subscribe to a Premium Plan.</Link>
            </Typography>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <img
              src={InstallForFree}
              alt="InstallForFree"
              className="InstallForFree"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default EightSection
