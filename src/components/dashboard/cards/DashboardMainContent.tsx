'use client';

import React from 'react';
import { Box, Card, CardContent, Grid, Stack, useMediaQuery, useTheme } from '@mui/material';
import { Colors } from '@/constants/Color';
import DashboardMainContentTitleText from '../texts/DashboardMainContentTitleText';
import LaunchButton from '../buttons/LaunchButton';
import IdeaTitleText from '../texts/IdeaTitleText';
import IdeaCreatedAtText from '../texts/IdeaCreatedAtText';
import IdeaStatusText from '../texts/IdeaStatusText';
import MobileLaunchButton from '../buttons/MobileLaunchButton';
import ViewDetailsButton from '../buttons/ViewDetailsButton';
import IdeaDeleteButton from '../buttons/IdeaDeleteButton';
import ContinueButton from '../buttons/ContinueButton';

interface DashboardMainContentProps {
  ideas: {
    id: number;
    ideaId: number;
    title: string;
    createdAt: string;
    isCompleted: boolean;
  }[];
}

const DashboardMainContent: React.FC<DashboardMainContentProps> = ({ ideas }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid size={{ xs: 12, md: 9 }}>
      <Box
        sx={{
          background: Colors.BACKGROUND,
          borderRadius: 4,
          boxShadow: Colors.SHADOW_MEDIUM,
          p: { xs: 2, md: 3 },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <DashboardMainContentTitleText />
          {!isMobile && (
            <LaunchButton />
          )}
        </Stack>

        <Grid container spacing={2}>
          {ideas.map((idea) => (
            <Grid size={{ xs: 12, sm: 6 }} key={idea.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  background: Colors.BACKGROUND,
                  boxShadow: Colors.SHADOW_LIGHT,
                  p: 1,
                }}
              >
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={1}>
                      <IdeaTitleText title={idea.title} />
                  </Stack>
                  <IdeaCreatedAtText createdAt={idea.createdAt} />
                  <IdeaStatusText isCompleted={idea.isCompleted} />

                  <Stack direction="row" spacing={1} mt={1.5}>
                    <IdeaDeleteButton ideaId={idea.ideaId} />
                    {idea.isCompleted ? <ViewDetailsButton ideaId={idea.ideaId} /> : <ContinueButton ideaId={idea.ideaId} />}
                    {/* <IdeaPdfButton /> */}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {isMobile && (
          <MobileLaunchButton />
        )}
      </Box>
    </Grid>
  );
}

export default DashboardMainContent;