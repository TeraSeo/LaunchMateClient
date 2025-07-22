import { features } from "@/constants/HomeData";
import { Box, Container, Grid } from "@mui/material";
import FeatureCard from "../cards/FeatureCard";
import FeatureTitleText from "../texts/FeatureTitleText";

const FeatureSection: React.FC = () => {
    return (
        <Box id="features" sx={{ py: 8, background: 'rgba(255, 255, 255, 0.02)' }}>
            <Container maxWidth="lg">
            <FeatureTitleText />
            <Grid container spacing={3} sx={{ mt: 4 }}>
                {features.map((feature, index) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
                    <FeatureCard {...feature} />
                </Grid>
                ))}
            </Grid>
            </Container>
        </Box>
    )
}

export default FeatureSection;