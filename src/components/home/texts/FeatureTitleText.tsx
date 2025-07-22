import { fontSize } from "@/constants/FontSize";
import { Typography } from "@mui/material";

const FeatureTitleText: React.FC = () => {
    return (
        <Typography
                variant="h2" 
                component="h2" 
                align="center" 
                gutterBottom
                sx={{ fontSize: fontSize.section.title }}
            >
                What We Generate
        </Typography>  
    );
}

export default FeatureTitleText;