import { fontSize } from "@/constants/FontSize";
import { Typography } from "@mui/material";

const StepsSectionTitleText: React.FC = () => {
    return (
        <Typography
            variant="h2" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ fontSize: fontSize.section.title }}
        >
            How It Works
        </Typography>
    );
}

export default StepsSectionTitleText;