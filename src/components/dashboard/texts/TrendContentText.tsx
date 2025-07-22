import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import { Typography } from "@mui/material";

const TrendContentText: React.FC = () => {
    return (
        <>
            <Typography fontWeight={600} sx={{ fontSize: fontSize.dashboard.label3 }}>Generative AI in Healthcare</Typography>
            <Typography fontSize="0.83rem" color={Colors.TEXT_SECONDARY} mb={1.5} sx={{ fontSize: fontSize.dashboard.label4 }}>“AI-powered diagnostics are reducing patient waiting times by 30%.”</Typography>
        </>
    );
}

export default TrendContentText;