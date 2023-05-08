import { Container, Grid, Box, Typography } from "@mui/material"
import React from "react"
import "./twelvesection.css"
import example from "../../../images/example.png"

const Twelvesection = () => {
  return (
    <Container className="millionUsers">
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
                  And Counting!
                </Typography>
                <Box className="personBox">
                  <img src={example} alt="person" />
                  <img src={example} alt="person" />
                </Box>
              </Box>
              <Typography variant="h1">
                Over a million users
                <br />
                love AIPRM for ChatGPT’s prompt library
              </Typography>

              <Typography variant="h4">
                With new users everyday we continue to create prompts that gets
                results and gives our community their back.
              </Typography>
            </Box>
          </Grid>
          <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
            <Box>
              <Typography variant="h5" textAlign={"center"}>
                Reviews Section
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Twelvesection
