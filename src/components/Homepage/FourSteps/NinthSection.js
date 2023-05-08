import {
  Container,
  Grid,
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material"
import React from "react"
import "./ninthsection.css"
import InfoSteps from "./InfoSteps.js"

const NinthSection = () => {
  return (
    <Container className="fourSteps">
      <Box>
        <Grid container>
          <Grid xl={12} lg={12} md={12} sm={12} xs={12} display={"flex"}>
            <Box className="restBox">
              <Box className="trustedBox">
                <Typography
                  variant="h5"
                  fontWeight={600}
                  color={"#ffffff"}
                  textTransform={"uppercase"}
                >
                  Become an Army of One Today
                </Typography>
              </Box>
              <Typography variant="h1">
                You are four steps away from solving your content problem.
              </Typography>
              <Typography variant="h4">
                Some text here would be nice.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container marginTop={4}>
          {InfoSteps.map(data => (
            <Grid
              xl={3}
              lg={3}
              md={6}
              sm={12}
              xs={12}
              display={"flex"}
              className="numberedBox"
            >
              <Box className="restBox">
                <Box className="trustedBox">
                  <Typography variant="h5" fontWeight={600} color={"#ffffff"}>
                    Step
                  </Typography>
                  <Typography
                    variant="h3"
                    fontWeight={600}
                    color={"#ffffff"}
                    textTransform={"uppercase"}
                  >
                    1
                  </Typography>
                </Box>
                <Typography variant="h1">
                  Install the Chrome Extension
                </Typography>
                <Typography variant="p" textAlign={"left"}>
                  With one click, install our browser extension for and have
                  access to all of our prompts while you use ChatGPT.
                </Typography>
                <Accordion>
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="p">
                      Is it available for other browsers?
                    </Typography>
                    <Typography variant="p">+</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="p">
                      Right now, AIPRM only works for Chromium based browsers
                      like Chrome and Brave.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default NinthSection
