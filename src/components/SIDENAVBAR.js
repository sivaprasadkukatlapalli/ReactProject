import React from 'react';
import './sidenavbar.css'
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import submission from '../asset/submission.png'
import candidatelibrary from '../asset/candidatelibrary.jpg'
import Employee from '../asset/Employee.png'
import masterlist from '../asset/download.png'
import report from '../asset/report.jfif'
import portal from '../asset/portal.png'
import atslogin from'../asset/ats.PNG'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import BDEdashboard from './BDEdashboard';
import Target from './Target';
import Demand from './Demand';
import Submission from './Submission';

function Sidenavbar() {
    return (
      
      <>
        
      <div className='head-container'>
      <img src={atslogin} alt='atslogin'  className='img'/>
      </div>
     <div className='bg-container'>
     
        <div className='menu'>
            <MenuList>
              <Link  to ="/dashboard">
            <MenuItem>
          <ListItemIcon>
            <DashboardIcon/>
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>
        </Link>

        <Link to ="/bdedashboard">
        <MenuItem>
          <ListItemIcon>
            <GridViewOutlinedIcon/>
          </ListItemIcon>
          <ListItemText>BDE Dashboard</ListItemText>
        </MenuItem>
        </Link>
        <Link to ="/target">
        <MenuItem>
          <ListItemIcon>
            <TrackChangesIcon/>
          </ListItemIcon>
          <ListItemText>Target</ListItemText>
        </MenuItem>
        </Link>
        <Link to ="/deamd">
        <MenuItem>
          <ListItemIcon>
            <OndemandVideoSharpIcon />
          </ListItemIcon>
          <ListItemText>Demand</ListItemText>
        </MenuItem>
        </Link>
        <Link to ="/submissionReport">
        <MenuItem>
          <ListItemIcon>
        <img src={submission} className='img-submssion' alt='submission'/>
          </ListItemIcon>
          <ListItemText>Submission Report</ListItemText>
        </MenuItem>
        </Link>
        <Link to ="/candidatelibrary" >
         <MenuItem>
          <ListItemIcon>
        <img src={candidatelibrary} className='img-submssion'  alt='candidatelibrary' />
          </ListItemIcon>
          <ListItemText>Candidate Library</ListItemText>  
        </MenuItem>
        </Link>
        <Link to ="/employee">
        <MenuItem>
          <ListItemIcon>
          <img src={Employee} className='img-submssion'  alt='employee' />
          </ListItemIcon>
          <ListItemText>Employee</ListItemText>
        </MenuItem>
        </Link>
        <Link to ="/masterlist">
        <MenuItem>
          <ListItemIcon>
          <img src={masterlist} className='img-submssion'  alt='masterlist' />
          </ListItemIcon>
          <ListItemText>Master List</ListItemText>
        </MenuItem>
        </Link>
        <Link to="/reports">
        <MenuItem>
          <ListItemIcon>
          <img src={report} className='img-submssion'  alt='masterlist' />
          </ListItemIcon>
          <ListItemText>Reports</ListItemText>
        </MenuItem>
        </Link>
        <Link to ="/portal">
        <MenuItem> 
          <ListItemIcon>
          <img src={portal} className='img-submssion'  alt='masterlist' />
          </ListItemIcon>
          <ListItemText>Portal</ListItemText>
        </MenuItem>
        </Link>
      
            </MenuList>
            </div>
          
            <div>
              
            </div>

            </div>
            </>
          )
            }


export default Sidenavbar;
