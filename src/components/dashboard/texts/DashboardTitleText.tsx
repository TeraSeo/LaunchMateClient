import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import { Typography } from "@mui/material";

const DashboardTitleText: React.FC = () => {
    return (
        <Typography variant="h3" fontWeight={800} mb={3} color={Colors.TEXT} sx={{ fontSize: fontSize.dashboard.title }}>Dashboard</Typography>
    );
}

export default DashboardTitleText;