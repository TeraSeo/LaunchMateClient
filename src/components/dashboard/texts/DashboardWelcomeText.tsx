import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import { Typography } from "@mui/material";

interface DashboardWelcomeTextProps {
    username: string
}

const DashboardWelcomeText: React.FC<DashboardWelcomeTextProps> = ({ username }) => {
    return (
        <>
            <Typography variant="h5" fontWeight={800} mb={0.5} color={Colors.TEXT} sx={{ fontSize: fontSize.dashboard.subTitle }}>Welcome back, { username }!</Typography>
            <Typography color={Colors.TEXT_SECONDARY} mb={2} sx={{ fontSize: fontSize.dashboard.label1 }}>Here’s what’s happening with your ideas.</Typography>
        </>
    );
}

export default DashboardWelcomeText;