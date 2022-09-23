import * as React from 'react';
import useSWR from 'swr';
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

const Header =  () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const fetcher = url => fetch(url).then(r => r.json())

  const {data, error} = useSWR('api/navigation', fetcher);
  if(error) return <div>Failed load</div>
  if(!data) return <div>Loading...</div>
  //console.log(data);
  const pages = data;

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
                <MenuItem key={page.slug} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 0, textAlign:'right', display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.slug}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
            <Box sx={{margin: '20px', paddingLeft: '20px', borderLeft: '1px solid #fff'}}>
              <Stack direction="row" spacing={1}>
                <a href="https://www.facebook.com/agnieszkamandalphotography" title="Fotografia Agnieszka Mandal na Facebook.com" target="_blank" rel="noreferrer">
                  <Avatar sx={{ bgcolor: 'rgb(255,255,255, 0.2)'}}>
                    <FacebookOutlinedIcon fontSize="small" />
                  </Avatar>
                </a>
                <a href="mailto:marketing@agnieszkamandal.com" title="Kontakt z Fotografia Agnieszka" target="_blank" rel="noreferrer">
                  <Avatar sx={{ bgcolor: 'rgb(255,255,255, 0.2)'}}>
                    <MailOutlinedIcon fontSize="small" />
                  </Avatar>
                </a>
                <a href="https://www.instagram.com/agnieszkamandal.fotografia/" title="Fotografia Agnieszka Mandal na Instagram.com" target="_blank" rel="noreferrer">
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

export default Header;