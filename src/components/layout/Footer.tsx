import React from 'react';
import { Box, Container, Grid, Typography, Avatar, Stack, Button, Divider } from '@mui/material';
import Image from 'next/image';
import { fontSize } from '@/constants/FontSize';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        background: 'rgba(10, 10, 10, 0.8)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Avatar
                sx={{
                  background: 'linear-gradient(135deg, #2979FF 0%, #5B9AFF 100%)',
                  width: 40,
                  height: 40,
                }}
              >
                <Image
                    src="/images/logo.png"
                    alt="LaunchMate Logo"
                    width={24}
                    height={24}
                    style={{
                      borderRadius: '4px',
                      border: '1px solid #ccc'
                    }}
                  />
              </Avatar>
              <Typography
                component="div"
                sx={{ fontWeight: 600, fontSize: fontSize.footer.title }}
              >
                LaunchMate
              </Typography>
            </Box>
            <Typography
              color="text.secondary"
              sx={{ fontSize: fontSize.footer.text }}
            >
              Transform your ideas into successful business plans with AI-powered insights.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography sx={{ fontSize: fontSize.footer.title }} gutterBottom>
              Product
            </Typography>
            <Stack spacing={1} alignItems="flex-start">
              <Button color="inherit" href="#about" size="small">About</Button>
              <Button color="inherit" href="#features" size="small">Features</Button>
              <Button color="inherit" href="#pricing" size="small">Pricing</Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography sx={{ fontSize: fontSize.footer.title }} gutterBottom>
              Support
            </Typography>
            <Stack spacing={1} alignItems="flex-start">
              <Button color="inherit" href="#help" size="small">Help Center</Button>
              <Button color="inherit" href="#contact" size="small">Contact</Button>
              <Button color="inherit" href="#docs" size="small">Documentation</Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography sx={{ fontSize: fontSize.footer.title }} gutterBottom>
              Legal
            </Typography>
            <Stack spacing={1} alignItems="flex-start">
              <Button color="inherit" href="#privacy" size="small">Privacy Policy</Button>
              <Button color="inherit" href="#terms" size="small">Terms of Service</Button>
              <Button color="inherit" href="#cookies" size="small">Cookie Policy</Button>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography
          color="text.secondary"
          align="center"
          sx={{ fontSize: fontSize.footer.text }}
        >
          &copy; {new Date().getFullYear()} LaunchMate. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
