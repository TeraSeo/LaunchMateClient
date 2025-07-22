import { fontSize } from "@/constants/FontSize";
import { Typography } from "@mui/material";

const PricingTitleText: React.FC = () => {
    return (
        <Typography
            variant="h2" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ fontSize: fontSize.section.title }}
        >
            Choose Your Plan
        </Typography>
    );
}

export default PricingTitleText;
