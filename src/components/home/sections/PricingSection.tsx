import { pricingPlans } from "@/constants/HomeData";
import { Box, Container, Grid } from "@mui/material";
import PricingCard from "../cards/PricingCard";
import PricingTitleText from "../texts/PricingTitleText";

const PricingSection: React.FC = () => {
    return (
        <Box id="pricing" sx={{ py: 8, background: 'rgba(255, 255, 255, 0.02)' }}>
            <Container maxWidth="lg">
            <PricingTitleText />
            <Grid container spacing={3} sx={{ mt: 4, maxWidth: 1000, mx: 'auto' }}>
                {pricingPlans.map((plan, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                    <PricingCard {...plan} />
                </Grid>
                ))}
            </Grid>
            </Container>
        </Box>
    );
}

export default PricingSection;