import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import { Stack, Typography } from "@mui/material";

type Activity = {
    text: string; 
    date: string
};

interface RecentActivitiesTextProps {
    activities: Activity[];
  }

const RecentActivitiesText: React.FC<RecentActivitiesTextProps> = ({ activities }) => {
    return (
        <Stack spacing={1}>
            {activities.map((a, i) => (
            <Typography key={i} color={Colors.TEXT_SECONDARY} sx={{ fontSize: fontSize.dashboard.label4 }}>{a.text} <span style={{ color: Colors.TEXT_MUTED, fontSize: '0.75em' }}>({a.date})</span></Typography>
            ))}
        </Stack>
    );
}

export default RecentActivitiesText;