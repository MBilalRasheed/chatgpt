import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import OutlinedCard from '../Homepage/Tabs/marketing/Options'
import { cards } from '../Homepage/Hero-Section/InfoCards'
import Card from './Card'

const index = () => {
    return (
        <Grid container spacing={2}>
            <Grid item md={6}>
                <Stack direction={'column'}>
                    <Typography
                        color={"#0b23cb"}
                        fontWeight={800}
                        variant='h4'
                    >
                        Live Crawling
                    </Typography>
                    <Typography
                        color={"#464646"}
                        fontWeight={800}
                        sx={{ textDecoration: 'underline' }}
                        variant='subtitle2'>
                        ✓Outrank your competitor's recent post.
                    </Typography>
                    <Typography
                        color={"#464646"}
                        fontWeight={800}
                        variant='subtitle2'>
                        ✓Analyze writing styles.
                    </Typography>
                    <Typography
                        color={"#464646"}
                        fontWeight={800}
                        variant='subtitle2'>
                        ✓ Summarize content quickly.
                    </Typography>
                </Stack>
            </Grid>
            <Grid item md={6}>
                <Stack direction={'column'}>
                    <Typography
                        color={"black"}
                        fontWeight={800}
                        variant='h5'>
                        It's one thing to just generate content...
                    </Typography>
                    <Typography
                        color={"black"}
                        fontWeight={800}
                        variant='subtitle2'>
                        ...it's another to access real-time data.
                    </Typography>
                    <Typography
                        color={"black"}
                        fontWeight={800}
                        variant='subtitle2'>
                        ChatGPT has only been trained up to 2021, so there's a bit of a
                        knowledge gap. With AIPRM, you bypass this and receive
                        quality, accurate results with our live crawling prompts.
                    </Typography>

                </Stack>
            </Grid>

           <Card/>

        </Grid>
    )
}

export default index
