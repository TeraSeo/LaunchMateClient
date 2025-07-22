import { fontSize } from "@/constants/FontSize";
import { Typography } from "@mui/material";

const TrendTitleText: React.FC = () => {
    return (
        <Typography variant="h6" fontWeight={700} mb={1} sx={{ fontSize: fontSize.dashboard.sidebarTitle }}>📣 AI Trend</Typography>
    );
}

export default TrendTitleText;