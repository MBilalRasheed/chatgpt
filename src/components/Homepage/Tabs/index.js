import React, { useState } from 'react';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { Icon } from '@mui/material'
import IconMarketers from '../../../images/TabbedSection/IconMarketers.svg';
import IconProductivity from '../../../images/TabbedSection/IconProductivity.svg';
import IconSales from '../../../images/TabbedSection/IconSales.svg';
import IconCopywriters from '../../../images/TabbedSection/IconCopywriters.svg';
import IconCustomerSupport from '../../../images/TabbedSection/IconCustomerSupport.svg';


import { makeStyles } from '@mui/styles';
import Marketing from './marketing/Marketing';

const tabs = [
    { name: 'Markters', iconName: IconMarketers },
    { name: 'Sales', iconName: IconSales },
    { name: 'Copywriters', iconName: IconCopywriters },
    { name: 'Productivity', iconName: IconProductivity },
    { name: 'Customer Support', iconName: IconCustomerSupport },
]

const useStyles = makeStyles((theme) => {
    return {
        btn: {
            fontSize: 20,
            color: "black",
            fontWeight: 600,
        },
        tabs: {
            "& .MuiTabs-indicator": {
                display: "none"
            },
            "& .MuiButtonBase-root": {
                display: "block"
                //backgroundColor: "orange"
            },
            "& .Mui-selected": {
                backgroundColor: '#ffffff',
                padding: '52px'
            }
        }
    }
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, backgroundColor: '#ffffff' }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

function TabLabel(props) {
    const classes = useStyles()
    return (<span className={classes.btn}>{props.label}</span>)
}

export default function TabbedInterface() {
    const classes = useStyles()
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box px={10} mx={10}>
            <Tabs variant='scrollable' className={classes.tabs} value={value} onChange={handleChange} aria-label="tabs">
                {
                    tabs.map((tab, index) =>
                        <Tab icon={<Icon><img src={tab.iconName} alt="" /></Icon>}
                            iconPosition="start"
                            label={<TabLabel label={tab.name} />}
                            id={`${tab.name}-${index}`}
                        />)
                }
            </Tabs>
            {[<Marketing />, 0, 0, 0, 0].map((item, index) => {
                return (<TabPanel value={value} index={index}>
                    {item ? item : <div style={{ width: '100%', height: '100px', backgroundColor: '#ffffff' }}></div>}
                </TabPanel>)
            })}


        </Box>)
}