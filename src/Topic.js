import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from './Navbar';
import SideNav from './SideNav';
import ModuleSidebar from './ModuleSidebar';
import Footer from './Footer';
import './Topic.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const d=new Date();
  const DAYS = ["Sunday", "Monday","Tuesday","Thursday","Friday","Saturday"];
  const date=d.getDate()+'-'+d.getMonth()+'-'+ d.getFullYear() + ' , ' +DAYS[d.getDay()]+ ' ' + d.getHours()+':'+d.getMinutes();

  return (
    <div >
    <Navbar/>
    <SideNav title="modules" />
    <ModuleSidebar title="Topic" />
    <div className='topic-content'>
    <h1>Python Loops</h1>
    <p style={{fontSize:'20px',fontWeight:"200" }}>{date}</p>
    <h2 style={{color:'blue',textAlign:'right',marginLeft:'10%',marginRight:'10%'}}> Daily Feedback</h2>
    <div className="topic-content-core">
    <Box sx={{ width: '100' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Session Plan" {...a11yProps(0)} />
          <Tab label="Prewatch Recordings" {...a11yProps(1)} />
          <Tab label="Session Recordings" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h2> Session Plan</h2>
        <p style={{fontSize:'20px'}}>Live session about to start please stay tuned</p>
        <button className='join-now'> JOIN LIVE SESSION</button>
        <p style={{fontSize:'20px'}}><ul>
            <li>Introduction to Python Loops</li>
            <li>For Loop</li>
            <li>Filtering Database</li>
            <li>Usage of loc and iolc function</li>
        </ul>
        Session Details
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
    </div>
    </div>
    <Footer/>
    </div>
  );
}