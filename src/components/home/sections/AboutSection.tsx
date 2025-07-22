import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Container, Box, Grid, Stack } from '@mui/material';
import Scene from '../Scene';
import AboutTitleText from '../texts/AboutTitleText';
import AboutSubTitleText from '../texts/AboutSubTitleText';
import AboutCreateButton from '../buttons/AboutCreateButton';
import AboutWatchDemoButton from '../buttons/AboutWatchDemoButton';

const AboutSection: React.FC = () => {
    return (
        <Box id="about" sx={{ pt: 10, pb: 6 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center" sx={{ minHeight: { xs: 'auto', md: '80vh' } }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                    <AboutTitleText />
                    <AboutSubTitleText />

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} flexWrap="wrap">
                        <AboutCreateButton />
                        <AboutWatchDemoButton />
                    </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ 
                        height: { xs: 300, sm: 400, md: 500 }, 
                        borderRadius: 3, 
                        overflow: 'hidden', 
                        background: 'rgba(255, 255, 255, 0.05)', 
                        backdropFilter: 'blur(20px)', 
                        border: '1px solid rgba(255, 255, 255, 0.1)' 
                    }}>
                        <Canvas camera={{ position: [0, 0, 5] }}>
                        <Suspense fallback={null}>
                            <Scene />
                        </Suspense>
                        </Canvas>
                    </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default AboutSection;