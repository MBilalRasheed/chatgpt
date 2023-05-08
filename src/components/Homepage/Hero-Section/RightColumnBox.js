import React from "react"

// styling
import "./herosection.css"

// mui components
import { Grid, Box, Typography } from "@mui/material"

// svg icons
import IconCopyText from "../../../images/IconCopyText.svg"
import IconNameofUser from "../../../images/IconNameofUser.svg"
import IconVetted from "../../../images/IconVetted.svg"
import IconTimeposted from "../../../images/IconTimeposted.svg"
import IconLikeDislike from "../../../images/IconLikeDislike.svg"
import IconViews from "../../../images/IconViews.svg"
import IconMessages from "../../../images/IconMessages.svg"
import { cards } from "./InfoCards"

const RightColumnBox = () => {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {cards.map(data => (
          <Grid md={6} sm={6} xs={16} item>
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
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default RightColumnBox
