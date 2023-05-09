import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import IconVetted from '../../../../images/IconVetted.svg'
import IconNameofUser from '../../../../images/IconNameofUser.svg'
import IconTimeposted from '../../../../images/IconTimeposted.svg'
import IconViews from '../../../../images/IconViews.svg'
import IconMessages from '../../../../images/IconMessages.svg'
import IconLikeDislike from '../../../../images/IconLikeDislike.svg'
import IconCopyText from '../../../../images/IconCopyText.svg'
import { cards } from './homepageInfoCards';
import { Container, Grid } from '@mui/material';
import './BoxStyle.css'


export default function OutlinedCard(props) {
    return (
        <Grid container xs={12} sm={12} md={12} lg={8} my={4} width={{ sm: '100%' }}>
            {
                cards.map(data => (
                    <Grid borderRadius={2} md={5.5} sm={12} xs={12} m={{ sm: 1, md: 1, xs: 1 }} item boxShadow={2} px={1} columnSpacing={1}>
                        <Box className="parentWrap">
                            <Box className="badge">
                                <Typography>{data.type}</Typography>
                            </Box>
                            <Box>
                                <h2>{data.title}</h2>
                                <img
                                    src={IconVetted}
                                    style={{
                                        width: "20px",
                                        marginTop: "8px",
                                        marginBottom: "8px",
                                    }}
                                    alt=""
                                />
                            </Box>
                            <Box className="serachTimer">
                                <Box className="serach">
                                    <img src={IconNameofUser} style={{ width: "16px" }} alt="" />
                                    <p>{data.provider}</p>
                                </Box>
                                <Box className="timer">
                                    <img src={IconTimeposted} style={{ width: "16px" }} alt="" />
                                    <p>{data.time}</p>
                                </Box>
                            </Box>
                            <h4>
                                {data.mainDes}
                            </h4>
                            <h4>
                                {data.des}
                            </h4>
                            <Box className="likeComment">
                                <Box className="views">
                                    <img src={IconViews} style={{ width: "20px" }} alt="" />
                                    <p>1.8 K</p>
                                </Box>
                                <Box className="comment">
                                    <img src={IconMessages} style={{ width: "20px" }} alt="" />
                                    <p>591</p>
                                </Box>
                                <Box className="likes">
                                    <img src={IconLikeDislike} style={{ width: "20px" }} alt="" />
                                    <p>3</p>
                                    <img src={IconLikeDislike} style={{ width: "20px" }} alt="" />
                                    <p></p>
                                </Box>
                                <Box className="copybox">
                                    <img src={IconCopyText} style={{ width: "24px" }} alt="" />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))
            }
        </Grid>
    );
}