import React from 'react'
import Info from './Info';
import OutlinedCard from './Options';
import { Stack, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import Offers from './Offers';

const Root = styled(Stack)(({ theme }) => {
    return {
        direction: theme.breakpoints.up('md') ? 'row' : 'column',
        alignItems:'flex-start'
    }
});

const Marketing = () => {
    return (
        <Root justifyContent={'space-between'} direction={{ xs: 'column', md: 'row', sm: 'column', lg: 'row' }} useFlexGap flexWrap="wrap">
            <Info />
            <OutlinedCard />
            <Offers/>
        </Root>
    )
}

export default Marketing
