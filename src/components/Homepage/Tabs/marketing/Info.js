import React from 'react'
import IconCopyText from '../../../../images/IconCopyText.svg'
import { Stack, Typography } from '@mui/material';
import './BoxStyle.css';
const Info = () => {

    return (
        <div className='info-wrapper' >
            <p className='supercharge'>Supercharge Planning & Creating</p>
            <img style={{ width: '50px', height: '50px', margin: '50px 50px' }} src={IconCopyText} alt='1' />
            <p className='get-more-done'>Get More don in less time as you create marketing strategy with 1-click prompts for ...</p>
        </div>
    )
}

export default Info
