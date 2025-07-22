import { fontSize } from "@/constants/FontSize";
import { Typography } from "@mui/material";

const RecentActivityTitleText: React.FC = () => {
    return (
        <Typography variant="h6" fontWeight={700} mb={1} sx={{ fontSize: fontSize.dashboard.sidebarTitle }}>🔁 Recent Activity</Typography>
    );
}

export default RecentActivityTitleText;