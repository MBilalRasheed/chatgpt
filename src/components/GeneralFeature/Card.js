import React from 'react'
import { card2 } from '../Homepage/Hero-Section/InfoCards'
import { Box, Grid, Stack, Typography } from '@mui/material'
import IconNameofUser from '../../images/IconNameofUser.svg'
import IconViews from '../../images/IconViews.svg'
import IconMessages from '../../images/IconMessages.svg'
import IconLikeDislike from '../../images/IconLikeDislike.svg'
import IconCopyText from '../../images/IconCopyText.svg'
const Card = () => {
    return (
        <Grid container xs={12} sm={12} md={12} lg={12} my={4} width={{ sm: '100%' }} mx={1}>
            {
                card2.map(data => (
                    <Grid borderRadius={2} md={5.5} sm={12} xs={12} m={{ sm: 1, md: 1, xs: 1 }} item boxShadow={1} columnSpacing={1}>
                        <Box>
                            <Typography variant='h5' color={'black'}>{data.title}</Typography>
                            <Typography>{data.type}</Typography>
                        </Box>
                        <Stack direction={'row'}>
                            <Stack direction={'row'} mx={1}>
                                <img src={IconNameofUser} style={{ width: "16px" }} alt="" />
                            </Stack>
                            <Stack direction={'row'} mx={1}>
                                <p>{data.time}</p>
                            </Stack>
                        </Stack>
                        <Typography>
                            {data.mainDes}
                        </Typography>
                        <Typography>
                            {data.des}
                        </Typography>
                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mx={1} my={5}>
                            <Stack direction={'row'} >
                                <img src={IconViews} style={{ width: "20px" }} alt="" />
                                <p>1.8 K</p>
                            </Stack>
                            <Stack direction={'row'} >
                                <img src={IconMessages} style={{ width: "20px" }} alt="" />
                                <p>591</p>
                            </Stack>
                            <Stack direction={'row'} >
                                <img src={IconLikeDislike} style={{ width: "20px" }} alt="" />
                                <p>3</p>
                                <img src={IconLikeDislike} style={{ width: "20px" }} alt="" />
                                <p></p>
                            </Stack>
                            <Stack direction={'row'} >
                                <img src={IconCopyText} style={{ width: "24px" }} alt="" />
                            </Stack>
                        </Stack>
                    </Grid>
                ))
            }
        </Grid >
    )
}

export default Card
