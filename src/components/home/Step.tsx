// components/sections/Step.tsx
"use client";

import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { fontSize } from '@/constants/FontSize';

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Avatar
        sx={{
          width: { xs: 50, sm: 60, md: 70 },
          height: { xs: 50, sm: 60, md: 70 },
          mx: "auto",
          mb: 2,
          background: "linear-gradient(135deg, #2979FF 0%, #5B9AFF 100%)",
          fontSize: fontSize.step.number,
          fontWeight: 700,
        }}
      >
        {number}
      </Avatar>
      <Typography 
        variant="h6" 
        component="h3" 
        gutterBottom
        sx={{ fontSize: fontSize.step.title }}
      >
        {title}
      </Typography>
      <Typography 
        variant="body2" 
        color="text.secondary"
        sx={{ fontSize: fontSize.step.description }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Step;
