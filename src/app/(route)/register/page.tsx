'use client';

import React from 'react';
import { Box, Paper, Container } from '@mui/material';
import { Colors } from '@/constants/Color';
import size from '@/constants/Size';
import RegisterTitleText from '@/components/auth/texts/RegisterTitleText';
// import GoogleSignInButton from '@/components/auth/buttons/GoogleSignInButton';
// import AuthDivider from '@/components/auth/AuthDivider';
import NavigateToLoginButton from '@/components/auth/buttons/NavigateToLoginButton';
import { NextPage } from 'next';
import RegisterForm from '@/components/auth/forms/RegisterForm';

const RegisterPage: NextPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: Colors.GRADIENT_PRIMARY,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: { xs: 6, md: 10 },
        pb: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={12}
          sx={{
            p: { xs: 3, sm: 5, md: 6 },
            borderRadius: { xs: 3, sm: 4, md: 5 },
            background: Colors.BACKGROUND,
            boxShadow: Colors.SHADOW_HEAVY,
            border: `1.5px solid ${Colors.SECONDARY_LIGHT}`,
            minWidth: size.loginPaper.minWidth,
            maxWidth: size.loginPaper.maxWidth,
            mx: 'auto',
          }}
        >
          <RegisterTitleText />

          {/* <GoogleSignInButton />
          <AuthDivider /> */}
          <RegisterForm />

          <NavigateToLoginButton />
        </Paper>
      </Container>
    </Box>
  );
};

export default RegisterPage;