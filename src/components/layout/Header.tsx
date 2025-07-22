'use client';

import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Container, Box } from '@mui/material';
import HeaderDrawer from './\bHeaderDrawer';
import HeaderLogoBox from './HeaderLogoBox';
import HeaderMenuItems from './HeaderMenuItems';
import { getTokenCookie, verifyToken } from '@/services/TokenService';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const checkLogin = async () => {
      const token = getTokenCookie();
      if (!token) return;

      const result = await verifyToken(token);
      if (result.success && result.verified) {
        setIsLoggedIn(true);
      }
    };

    checkLogin();
  }, []);

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <Container maxWidth="lg" disableGutters>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              {/* Logo & Title */}
              <HeaderLogoBox />

              {/* Menu Items */}
              <HeaderMenuItems isLoggedIn={isLoggedIn} handleDrawerToggle={handleDrawerToggle} />
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      <HeaderDrawer isLoggedIn={isLoggedIn}  mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    </>
  );
};

export default Header;
