import React from "react"
import "./logos.css"
import { Container, Grid, Box } from "@mui/material"
import Adobe from "../../../images/Logos/Adobe.png"
import Microsoft from "../../../images/Logos/Microsoft.png"
import ATTlogo from "../../../images/Logos/ATTlogo.png"
import Disnep from "../../../images/Logos/Disnep.png"
import Intel from "../../../images/Logos/Intel.png"

const Logos = () => {
  return (
    <Container className="parentLogos">
      <Box>
        <Grid container spacing={1}>
          <Grid
            container
            item
            lg={2.4}
            justifyContent="center"
            alignContent="center"
          >
            <img className="Adobe" src={Adobe} alt="Adobe" />
          </Grid>
          <Grid
            container
            item
            lg={2.4}
            justifyContent="center"
            alignContent="center"
          >
            <img className="Microsoft" src={Microsoft} alt="Microsoft" />
          </Grid>
          <Grid
            container
            item
            lg={2.4}
            justifyContent="center"
            alignContent="center"
          >
            <img className="ATTlogo" src={ATTlogo} alt="ATTlogo" />
          </Grid>
          <Grid
            container
            item
            lg={2.4}
            justifyContent="center"
            alignContent="center"
          >
            <img className="Disnep" src={Disnep} alt="Disnep" />
          </Grid>
          <Grid
            container
            item
            lg={2.4}
            justifyContent="center"
            alignContent="center"
          >
            <img className="Intel" src={Intel} alt="Intel" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Logos
