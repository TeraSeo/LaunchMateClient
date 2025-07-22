'use client';

import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { Colors } from '@/constants/Color';
import LaunchIdeaMainChatCard from '@/components/launch/cards/LaunchIdeaMainChatCard';
import LaunchIdeaProgressCard from '@/components/launch/cards/LaunchIdeaProgressCard';
import { NextPage } from 'next';
import { useParams } from 'next/navigation';
import { getIdeaAnswers } from '@/services/LaunchService';

const LaunchIdeaPage: NextPage = () => {
  const { id } = useParams() as { id: string };
  const [answers, setAnswers] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchIdeaAnswers = async () => {
      const response = await getIdeaAnswers(parseInt(id));
      if (response.success) {
        if (response.ideaAnswers) {
          setAnswers(response.ideaAnswers)
        }
      }
    }
    fetchIdeaAnswers();
  }, []);

  return (
    <Box
      sx={{
        background: Colors.BACKGROUND,
        minHeight: '100vh',
        pt: { xs: 10, sm: 12, md: 14 },
        pb: { xs: 4, sm: 6, md: 6 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="flex-start">
          <LaunchIdeaMainChatCard answers={answers} id={id} />
          <LaunchIdeaProgressCard answers={answers} />
        </Grid>
      </Container>
    </Box>
  );
};

export default LaunchIdeaPage;