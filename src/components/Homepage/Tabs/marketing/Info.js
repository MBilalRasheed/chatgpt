import React from 'react'
import IconCopyText from '../../../../images/IconCopyText.svg'
import { Stack, Typography } from '@mui/material';
const Info = () => {

    return (
        <Stack direction={'column'} width={{ xs: '100%', md: '100%', sm: '100%', lg: '30%' }} >
            <Typography
                textAlign={'start'}
                variant='h3'
                fontWeight={600}
                color={"#000000"}
                textTransform={"uppercase"}
                mx={1}
                my={6}>Supercharge Planning & Creating</Typography>
            <img style={{ width: '50px', height: '50px', margin: '50px 50px' }} src={IconCopyText} alt='1' />
            <Typography
                textAlign={'start'}
                variant='h5'
                fontWeight={600}
                color={"#000000"}
                textTransform={"uppercase"}
                mx={1}
                my={6}>Get More don in less time as you create marketing strategy with 1-click prompts for ...</Typography>
        </Stack>
    )
}

export default Info
