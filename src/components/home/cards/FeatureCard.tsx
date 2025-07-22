// components/FeatureCard.tsx
"use client";

import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { fontSize } from '@/constants/FontSize';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card
      sx={{
        height: "100%",
        transition: "all 0.3s ease",
        "&:hover": { transform: "translateY(-8px)" },
      }}
    >
      <CardContent sx={{ textAlign: "center", p: 3 }}>
        <Box sx={{ 
          mb: 2, 
          fontSize: fontSize.feature.icon,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {icon}
        </Box>
        <Typography 
          variant="h6" 
          component="h3" 
          gutterBottom
          sx={{ fontSize: fontSize.feature.title }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ fontSize: fontSize.feature.description }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
