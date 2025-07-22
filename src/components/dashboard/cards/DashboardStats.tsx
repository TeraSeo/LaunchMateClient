'use client';

import React from 'react';
import { Card, CardContent, Grid, Stack, useMediaQuery, useTheme } from '@mui/material';
import { Colors } from '@/constants/Color';
import DashboardStatText from '../texts/DashboardStatText';

type SummaryStat = {
  label: string;
  value: number;
};

interface SummaryStatsProps {
  stats: SummaryStat[];
}

const DashboardStats: React.FC<SummaryStatsProps> = ({ stats }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return isMobile ? (
    <Stack
      direction="row"
      spacing={1.5}
      overflow="auto"
      pb={1}
      sx={{
        '&::-webkit-scrollbar': {
          height: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#3b82f6',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
      }}
    >
      {stats.map((stat) => (
        <Card
          key={stat.label}
          sx={{
            minWidth: 130,
            maxWidth: 150,
            flex: '0 0 auto',
            background: Colors.BACKGROUND,
            borderRadius: 2,
            boxShadow: Colors.SHADOW_LIGHT,
          }}
        >
          <CardContent sx={{ px: 2.5, py: 1.5 }}>
            <DashboardStatText label={stat.label} value={stat.value} />
          </CardContent>
        </Card>
      ))}
    </Stack>
  ) : (
    <Grid container spacing={2}>
      {stats.map((stat) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.label}>
          <Card
            sx={{
              background: Colors.BACKGROUND,
              borderRadius: 2,
              boxShadow: Colors.SHADOW_LIGHT,
            }}
          >
            <CardContent sx={{ p: 2 }}>
                <DashboardStatText label={stat.label} value={stat.value} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default DashboardStats;