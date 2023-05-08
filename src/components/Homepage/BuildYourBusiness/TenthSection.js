import { Container, Grid, Box, Typography, Link } from "@mui/material"
import React from "react"
import "./tenthsection.css"
import InstallForFree from "../../../images/EightSection/InstallforFree.png"
import IconCopyText from "../../../images/IconCopyText.svg"
import IconNameofUser from "../../../images/IconNameofUser.svg"
import IconVetted from "../../../images/IconVetted.svg"
import IconTimeposted from "../../../images/IconTimeposted.svg"
import IconLikeDislike from "../../../images/IconLikeDislike.svg"
import IconViews from "../../../images/IconViews.svg"
import IconMessages from "../../../images/IconMessages.svg"

const TenthSection = () => {
  return (
    <Container className="saveTime">
      <Box>
        <Grid container spacing={2} className="timeColumns">
          <Grid xl={6} lg={6} md={12} s={12} xs={12} display={"flex"}>
            <Box className="restBox">
              <Typography variant="h1" style={{ marginBottom: "10px" }}>
                Build your business
              </Typography>
              <Typography variant="h1" style={{ marginBottom: "10px" }}>
                with the same tools the
              </Typography>
              <Typography variant="h1">
                <span style={{ color: "#0b23cb", marginBottom: "10px" }}>
                  big brands use
                </span>
              </Typography>

              <Typography variant="h2">1000s of prompts</Typography>
              <Typography variant="h4">
                If it's good enough for them, why wouldn't you use it?
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
          <Grid h1 xl={6} lg={6} md={12} s={12} xs={12} display={"flex"}>
            <Box className="rightInfoBlock">
              <Box className="parentWrap">
                <Box className="badge">
                  <Typography>Accounting</Typography>
                </Box>
                <Box>
                  <h2>Quickbooks Guru</h2>
                  <img
                    alt="IconVetted"
                    src={IconVetted}
                    style={{
                      width: "20px",
                      marginTop: "8px",
                      marginBottom: "8px",
                    }}
                  />
                </Box>
                <Box className="serachTimer">
                  <Box className="serach">
                    <img
                      alt="IconNameofUser"
                      src={IconNameofUser}
                      style={{ width: "16px" }}
                    />
                    <p>AIPRM</p>
                  </Box>
                  <Box className="timer">
                    <img
                      alt="IconTimeposted"
                      src={IconTimeposted}
                      style={{ width: "16px" }}
                    />
                    <p>2 Months Ago</p>
                  </Box>
                </Box>
                <h4>
                  Quickbooks giving you problems? I can help you overcome them!
                </h4>
                <Box className="likeComment">
                  <Box className="views">
                    <img
                      alt="IconViews"
                      src={IconViews}
                      style={{ width: "20px" }}
                    />
                    <p>1.8 K</p>
                  </Box>
                  <Box className="comment">
                    <img
                      alt="IconMessages"
                      src={IconMessages}
                      style={{ width: "20px" }}
                    />
                    <p>591</p>
                  </Box>
                  <Box className="likes">
                    <img
                      alt="IconLikeDislike"
                      src={IconLikeDislike}
                      style={{ width: "20px" }}
                    />
                    <p>3</p>
                    <img
                      alt="IconLikeDislike"
                      src={IconLikeDislike}
                      style={{ width: "20px" }}
                    />
                    <p></p>
                  </Box>
                  <Box className="copybox">
                    <img
                      alt="IconCopyText"
                      src={IconCopyText}
                      style={{ width: "24px" }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default TenthSection
