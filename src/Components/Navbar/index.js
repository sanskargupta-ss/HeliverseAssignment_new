import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
    console.log({location})
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar sx={{backgroundColor: 'white', color: '#555555' }} position="static">
        <Toolbar>
          <Typography  variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: '600', color: '#4287f5' }}>
            {location.pathname === '/groups' ? <Box onClick={()=>{navigate("/")}}> {`< `}Back to Dashboard</Box> : "Assignment"}
          </Typography>
          <Button onClick={()=>{navigate('/groups')}} color="inherit">Groups</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}