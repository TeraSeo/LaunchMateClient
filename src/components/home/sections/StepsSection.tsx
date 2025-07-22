import { steps } from "@/constants/HomeData";
import { Box, Container, Typography, Grid } from "@mui/material";
import Step from "../Step";
import { fontSize } from '@/constants/FontSize';
import StepsSectionTitleText from "../texts/StepsSectionTitleText";

const StepsSection :React.FC = () => {
    return (
        <Box sx={{ py: 8 }}>
            <Container maxWidth="lg">
            <StepsSectionTitleText />
            <Grid container spacing={4} sx={{ mt: 4 }}>
                {steps.map((step, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                    <Step {...step} />
                </Grid>
                ))}
            </Grid>
            </Container>
        </Box>
    );
}

export default StepsSection;