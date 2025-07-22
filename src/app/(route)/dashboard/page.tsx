'use client';

import React, { useEffect, useState } from 'react';
import { Box, Grid, Container } from '@mui/material';
import { Colors } from '@/constants/Color';
import DashboardMainContent from '@/components/dashboard/cards/DashboardMainContent';
import DashboardTopbar from '@/components/dashboard/bars/DashboardTopbar';
import DashboardSidebar from '@/components/dashboard/bars/DashboardSidebar';
import { getTokenCookie } from '@/services/TokenService';
import { getUserStat } from '@/services/UserService';
import { getSpecificSummarizedIdea } from '@/services/LaunchService';
import DashboardLoadingBox from '@/components/dashboard/DashboardLoadingBox';
import { UserStat } from '@/constants/Form';

export default function DashboardPage() {
  const [userStat, setUserStat] = useState<UserStat | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [ideas, setIdeas] = useState<
    {
      id: number;
      ideaId: number;
      title: string;
      createdAt: string;
      isCompleted: boolean;
    }[]
  >([]);

  useEffect(() => {
    const fetchStatsAndIdeas = async () => {
      const token = getTokenCookie();
      if (!token) return;

      const result = await getUserStat(token);
      if (!result.success || !result.userStat) return;

      setUserStat(result.userStat);

      const fetchedIdeas = await Promise.all(
        result.userStat.ideaIds.map(async (ideaId: number, index: number) => {
          const res = await getSpecificSummarizedIdea(ideaId);
          return {
            id: index + 1,
            ideaId: res.success && res.summarizedIdea?.ideaId ? res.summarizedIdea?.ideaId : 0,
            title: res.success && res.summarizedIdea?.title
              ? res.summarizedIdea.title
              : 'Not Completed',
            createdAt: res.success
              ? new Date(res.summarizedIdea!.createdAt).toISOString().split('T')[0]
              : 'Unknown',
              isCompleted: res.success && res.summarizedIdea?.isCompleted !== undefined
              ? res.summarizedIdea.isCompleted
              : false,
          };
        })
      );

      setIdeas(fetchedIdeas);

      setIsLoading(false);
    };

    fetchStatsAndIdeas();
  }, []);

  if (isLoading || !userStat || !ideas) {
    return <DashboardLoadingBox />
  }

  return (
    <Box sx={{ background: Colors.GRADIENT_PRIMARY }}>
      <Container maxWidth="lg">
        <Box sx={{ pt: 10, pb: 6, minHeight: '100vh' }}>
          <DashboardTopbar
            username={userStat?.username || ''}
            totalIdea={userStat?.totalIdea || 0}
            activeProjectCnt={userStat?.activeProjectCnt || 0}
            downloadCnt={userStat?.downloadCnt || 0}
          />

          <Grid container spacing={3} alignItems="flex-start">
            <DashboardMainContent ideas={ideas} />
            <DashboardSidebar />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}