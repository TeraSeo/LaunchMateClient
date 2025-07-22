import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import { Typography } from "@mui/material";

const GuideTitleText: React.FC = () => {
    return (
        <>
            <Typography variant="h6" fontWeight={700} mb={1} sx={{ fontSize: fontSize.dashboard.sidebarTitle }}>🧠 LaunchMate Guide</Typography>
            <Typography color={Colors.TEXT_SECONDARY} sx={{ fontSize: fontSize.dashboard.label3 }}>Today’s Tip: <b>What makes a good elevator pitch?</b></Typography>
        </>
    );
}

export default GuideTitleText;