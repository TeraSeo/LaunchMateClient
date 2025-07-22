import { Colors } from "@/constants/Color";
import { Box, Typography } from "@mui/material";

interface ProgressbarProps {
    percentage: number;
}

const Progressbar: React.FC<ProgressbarProps> = ({ percentage }) => {
    return (
        <Box sx={{ mt: 2, pt: 2, borderTop: `1px solid ${Colors.ACCENT_DARK}` }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="body2" color={Colors.TEXT_SECONDARY} fontWeight={500} sx={{ fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.85rem' } }}>
                Completion
                </Typography>
                <Typography variant="body2" color={Colors.SECONDARY} fontWeight={600} sx={{ fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.85rem' } }}>
                {percentage}%
                </Typography>
            </Box>
            <Box
                sx={{
                height: { xs: 3, sm: 4, md: 6 },
                borderRadius: 3,
                background: Colors.ACCENT_DARK,
                overflow: 'hidden',
                }}
            >
                <Box
                sx={{
                    height: '100%',
                    width: `${percentage}%`,
                    background: `linear-gradient(90deg, ${Colors.SECONDARY} 0%, ${Colors.ACCENT_LIGHT} 100%)`,
                    borderRadius: 3,
                    transition: 'width 0.5s ease',
                    boxShadow: `0 0 8px ${Colors.SECONDARY}40`,
                }}
                />
            </Box>
        </Box>
    );
}

export default Progressbar;