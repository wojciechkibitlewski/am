import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import Stack from '@mui/material/Stack';

import logo from '../../public/images/am_white_transparent.png';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header =  (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{backgroundColor: '#BEAB9E', boxShadow: 'none'}}>
      <Container maxWidth="lg">
        
        <Toolbar disableGutters sx={{display: 'flex', justifyContent:'space-between'}}>
          <div style={{ position: 'relative', width: '257px', height: '64.2px', margin:'10px' }}>
            <Image alt="Fotografia Agnieszka Mandal" src={logo} layout="fill" objectFit="cover" />
          </div>
          
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 0, textAlign:'right', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            <Box sx={{margin: '20px', paddingLeft: '20px', borderLeft: '1px solid #fff'}}>
              <Stack direction="row" spacing={1}>
                <a href="https://www.facebook.com/agnieszkamandalphotography" title="Fotografia Agnieszka Mandal na Facebook.com" target="_blank">
                  <Avatar sx={{ bgcolor: 'rgb(255,255,255, 0.2)'}}>
                    <FacebookOutlinedIcon fontSize="small" />
                  </Avatar>
                </a>
                <a href="mailto:marketing@agnieszkamandal.com" title="Kontakt z Fotografia Agnieszka" target="_blank">
                  <Avatar sx={{ bgcolor: 'rgb(255,255,255, 0.2)'}}>
                    <MailOutlinedIcon fontSize="small" />
                  </Avatar>
                </a>
                <a href="https://www.instagram.com/agnieszkamandal.fotografia/" title="Fotografia Agnieszka Mandal na Instagram.com" target="_blank">
                  <Avatar sx={{ bgcolor: 'rgb(255,255,255, 0.2)'}}>
                    <InstagramIcon fontSize="small" />
                  </Avatar>
                </a>
              </Stack>
              
            </Box>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/navigation')
  const navs = await res.json()

  return {
    props: {navs},
    revalidate: 10
  }  
}

export default Header;