"use client";

import { Box } from '@mui/material';
import { NextPage } from 'next';
import FeatureSection from '@/components/home/sections/FeatureSection';
import StepsSection from '@/components/home/sections/StepsSection';
import PricingSection from '@/components/home/sections/PricingSection';
import AboutSection from '@/components/home/sections/AboutSection';

const Home:NextPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0A0A0A 0%, #1E1E1E 50%, #121212 100%)' }}>
      <AboutSection />
      <FeatureSection />
      <StepsSection />
      <PricingSection />
    </Box>
  );
}

export default Home;