"use client";

import { Colors } from "@/constants/Color";
import { Box, Container, Fade, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchGeneratedDetailedIdea } from "@/services/GPTService";
import LaunchLoadingBox from "@/components/launch/LaunchLoadingBox";
import DetailedIdeaHeaderCard from "@/components/launch/cards/DetailedIdeaHeaderCard";
import DetailedIdeaMainSectionCard from "@/components/launch/cards/DetailedIdeaMainSectionCard";
import LaunchIdeaFinishButton from "@/components/launch/buttons/LaunchIdeaFinishButton";
import { NextPage } from "next";
import { createDetailedIdea } from "@/services/LaunchService";
import { DetailedIdea } from "@/constants/Form";

const LaunchSpecificPage: NextPage = () => {
  const { id } = useParams() as { id: string };
  const [detailed, setDetailed] = useState<DetailedIdea | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const idea = sessionStorage.getItem('confirmedIdeaText');
    if (idea) {
      setLoading(true);
      fetchGeneratedDetailedIdea(idea)
        .then((result) => {
          if (result.success) {
            setDetailed(result.idea);
            setError(null);
          } else {
            setError("Failed to create start up idea.");
          }
        })
        .catch(() => setError("Failed to create start up idea."))
        .finally(() => setLoading(false));
    } else {
      router.push('/launch/idea');
    }
  }, [router]);

  const handleFinish = async () => {
    sessionStorage.removeItem('confirmedIdeaText');
    const response = await createDetailedIdea({id: parseInt(id), detailed: detailed!});
    if (response.success) {
      router.push('/dashboard');
    }
  };

  if (loading) {
    return <LaunchLoadingBox />;
  }

  if (error || !detailed) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: Colors.BACKGROUND_LIGHT }}>
        <Typography color="error" variant="h6">{error || "상세 아이디어를 불러올 수 없습니다."}</Typography>
      </Box>
    );
  }

  const startupTitle = detailed.startupTitle;
  const description = detailed.description;
  const summary = detailed.businessPlanSummary;
  const market = detailed.marketAnalysis;
  const competitor = detailed.competitorAnalysis;
  const revenue = detailed.revenueModel;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(120deg, ${Colors.BACKGROUND_LIGHT} 70%, ${Colors.SECONDARY}10 100%)`,
        pt: { xs: 8, sm: 10, md: 12 },
        pb: { xs: 4, sm: 6, md: 8 },
        px: { xs: 0, sm: 0, md: 0 },
        overflowX: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={800}>
          <Box>
            <DetailedIdeaHeaderCard />

            <DetailedIdeaMainSectionCard startupTitle={startupTitle} description={description} summary={summary} market={market} competitor={competitor} revenue={revenue} swotSnapshot={detailed.swotSnapshot} />

            <LaunchIdeaFinishButton handleFinish={handleFinish} />
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default LaunchSpecificPage;