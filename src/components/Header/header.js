import React from "react"
import "./header.css"
import { Box, Container, Grid, Typography } from "@mui/material"
import logo from "../../images/logo.png"
import ChromeLogo from "../../images/ChromeLogo.png"

const Header = () => {
  return (
    <>
      <Container className="ParentContainer">
        <Box>
          <Grid container spacing={2}>
            <Grid
              item
              xl={1.5}
              lg={1.5}
              md={2}
              sm={4}
              xs={4}
              alignItems="center"
              display="flex"
            >
              <img src={logo} style={{ width: "150px" }} alt="logo" />
            </Grid>
            <Grid
              item
              xl={7.5}
              lg={7}
              md={7}
              sm={12}
              xs={12}
              alignItems="center"
              display="flex"
            >
              <Box className="navBarPages">
                <ul>
                  <li>
                    <a href="www.youtube.com">Features</a>
                  </li>
                  <li>
                    <a href="www.youtube.com">Prompts</a>
                  </li>
                  <li>
                    <a href="www.youtube.com">Pricing</a>
                  </li>
                  <li>
                    <a href="www.youtube.com">Use Cases</a>
                  </li>
                  <li>
                    <a href="www.youtube.com">Resources</a>
                  </li>
                  <li>
                    <a href="www.youtube.com">About</a>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid
              item
              xl={3}
              lg={3.5}
              md={3}
              sm={12}
              xs={12}
              alignItems="center"
              display="flex"
              justifyContent="flex-end"
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                className="extentionWrap"
              >
                <Box className="chromeExtentionBox">
                  <img src={ChromeLogo} alt="extention" />
                  <Typography variant="p">Install for Free</Typography>
                </Box>
                <Box mt={1} textAlign={"center"}>
                  <Typography variant="p" color={"#ffffff"}>
                    Chrome Extention for ChatGPT
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Header
