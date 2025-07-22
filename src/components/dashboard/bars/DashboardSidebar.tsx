import { Card, Grid } from "@mui/material";
import GuideTitleText from "../texts/GuideTitleText";
import ReadTutorialButton from "../buttons/ReadTutorialButton";
import RecentActivityTitleText from "../texts/RecentActivityTitleText";
import RecentActivitiesText from "../texts/RecentActivitiesText";
import TrendTitleText from "../texts/TrendTitleText";
import TrendContentText from "../texts/TrendContentText";
import { Colors } from "@/constants/Color";

const activities = [
    { text: 'Created new idea: "AI-powered Resume Builder"', date: '2024-06-01' },
    { text: 'Downloaded summary PDF for "Smart Health Tracker"', date: '2024-05-29' },
    { text: 'Requested feedback for "Remote Team Collaboration Tool"', date: '2024-05-25' },
];

const DashboardSidebar: React.FC = () => {
    return (
        <Grid size={{ xs: 12, md: 3 }}>
            <Card sx={{ background: Colors.BACKGROUND_LIGHT, borderRadius: 2, p: 2.5, mb: 2, boxShadow: Colors.SHADOW_HEAVY }}>
                <GuideTitleText />
                <ReadTutorialButton />
            </Card>

            <Card sx={{ background: Colors.BACKGROUND_LIGHT, borderRadius: 2, p: 2.5, mb: 2, boxShadow: Colors.SHADOW_HEAVY }}>
                <RecentActivityTitleText />
                <RecentActivitiesText activities={activities} />
            </Card>

            <Card sx={{ background: Colors.BACKGROUND_LIGHT, borderRadius: 2, p: 2.5, boxShadow: Colors.SHADOW_HEAVY }}>
                <TrendTitleText />
                <TrendContentText />
            </Card>
        </Grid>
    );
}

export default DashboardSidebar;