import { Container, Grid, Box, Typography, Link } from "@mui/material"
import React from "react"
import "./thirdsection.css"
import InstallForFree from "../../../images/EightSection/InstallforFree.png"
import example from "../../../images/example.png"

const ThirdSection = () => {
  return (
    <div   className="promptEngineers">
      <Box>
        <Grid container>
          <Grid xl={12} lg={12} md={12} s={12} xs={12} display={"flex"}>
            <Box className="restBox">
              <Box className="trustedBox">
                <Typography
                  variant="h5"
                  fontWeight={600}
                  color={"#ffffff"}
                  textTransform={"uppercase"}
                >
                  121k+ Prompt Engineers
                </Typography>
                <Box className="personBox">
                  <img src={example} alt="person" />
                  <img src={example} alt="person" />
                </Box>
              </Box>
              <Typography variant="h1">
                You know your small business. Use AIPRM 1-click prompts to
                quickly finish everything else...
              </Typography>
              <Typography variant="h4">
                It’s so easy even your elderly neighbor can use it.
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
    </div>
  )
}

export default ThirdSection
