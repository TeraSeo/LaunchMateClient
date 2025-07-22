import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import { Typography } from "@mui/material";

interface DashboardStatTextProps {
    label: string;
    value: number;
}

const DashboardStatText: React.FC<DashboardStatTextProps> = ({ label, value }) => {
    return (
        <>
            <Typography
              variant="h6"
              fontWeight={700}
              color={Colors.SECONDARY}
              sx={{ fontSize: fontSize.dashboard.label1 }}
            >
              {value}
            </Typography>
            <Typography
              color={Colors.TEXT_SECONDARY}
              sx={{ fontSize: fontSize.dashboard.label2 }}
            >
              {label}
            </Typography>
        </>
    );
}

export default DashboardStatText;