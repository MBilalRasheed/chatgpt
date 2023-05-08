import React from 'react'
import { Stack, Typography } from '@mui/material'
import IconPlanningBottomOnes from '../../../../images/TabbedSection/IconPlanningBottomOnes.svg'
import IconCustomerSupport from '../../../../images/TabbedSection/IconCustomerSupport.svg'
import IconSocialMediaBottomOnes from '../../../../images/TabbedSection/IconSocialMediaBottomOnes.svg'
import IconSEOBottomOnes from '../../../../images/TabbedSection/IconSEOBottomOnes.svg'
import IconPressRelease from '../../../../images/TabbedSection/IconPressRelease.svg'
import IconAdvertisingBottomOnes from '../../../../images/TabbedSection/IconAdvertisingBottomOnes.svg'


const offersList = [
    { name: 'Planning', icon: IconPlanningBottomOnes, des: 'Quick gain audience insights' },
    { name: 'Advertising', icon: IconAdvertisingBottomOnes, des: 'The perfect tag to grab attention' },
    { name: 'In store signage', icon: IconCustomerSupport, des: 'Let us brainstrom ideas for you' },
    { name: 'Social Media', icon: IconSocialMediaBottomOnes, des: 'Creating captions and hashtags easily' },
    { name: 'Seo', icon: IconSEOBottomOnes, des: 'get guidance on how to get your content seen' },
    { name: 'Press Release', icon: IconPressRelease, des: 'Reduce time drafting and publish faster' },
]
const Offers = () => {
    return (
        <Stack alignItems={{ md: 'flex-start' }} justifyContent={'space-evenly'} direction={{ xs: 'column', md: 'column', sm: 'column', lg: 'row' }}>
            {
                offersList.map(offer => (
                    <Stack alignItems={'flex-start'} my={2} mx={0.5} p={1} justifyContent={'center'} direction={'column'}>
                        <img src={offer.icon} style={{ width: '30px', height: '30px' }} alt='' />
                        <Typography variant='h6' color={"black"} fontWeight={'bold'} my={2}>{offer.name}</Typography>
                        <Typography variant='P' fontWeight={'bold'}>{offer.des}</Typography>
                    </Stack>
                ))
            }

        </Stack>
    )
}

export default Offers
