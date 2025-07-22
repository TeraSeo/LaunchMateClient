import { Colors } from "@/constants/Color";
import { Box } from "@mui/material";

const ProgressCircle: React.FC = () => {
    return (
        <Box
            sx={{
            width: { xs: 7, sm: 9, md: 12 },
            height: { xs: 7, sm: 9, md: 12 },
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${Colors.SECONDARY} 0%, ${Colors.ACCENT_LIGHT} 100%)`,
            flexShrink: 0,
            transition: 'all 0.3s ease',
            boxShadow: `0 0 8px ${Colors.SECONDARY}40`,
            }}
        />
    );
}

export default ProgressCircle;