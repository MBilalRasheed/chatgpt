import { Container, Grid, Box, Typography } from "@mui/material"
import React from "react"
import "./seventh.css"
import Baggage from "../../../images/SevenSection/Baggagenew.png"
import DomoreIcon from "../../../images/SevenSection/DomoreIcon.png"

const SeventhSection = () => {
  return (
    <Container className="lessWork">
      <Box>
        <Grid container spacing={2} className="workColumns">
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
                  <Typography textTransform={"uppercase"}>
                    Do More With Your Time
                  </Typography>
                  <img
                    src={DomoreIcon}
                    alt="handIcon"
                    width={"30px"}
                    style={{ margin: "0" }}
                  />
                </Box>
                <Box className="planning">
                  <Typography>
                    Spend less time working and more time enjoying life.
                  </Typography>
                </Box>
              </Box>
              <Box mt={2} textAlign={"center"}>
                <img src={Baggage} alt="handIcon" className="Baggage" />
              </Box>
            </Box>
          </Grid>
          <Grid xl={8} lg={8} md={12} s={12} xs={12} display={"flex"}>
            <Box className="restBox">
              <Typography variant="h1" style={{ color: "#000000" }}>
                Less Work Means
              </Typography>
              <Typography variant="h1">More Time for Family</Typography>
              <Typography variant="h2">
                Tasks that took days,<br></br> now take minutes.
              </Typography>
              <Typography variant="h4">
                The hours spent making sales plans, writing outreach emails, and
                more have accumulated to missed family occasions that you can
                never get back. AIPRM’s prompts were created with you in mind.
                Let’s help you be present for those upcoming priceless moments.
              </Typography>
              {/* <Box
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
              </Box> */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default SeventhSection
