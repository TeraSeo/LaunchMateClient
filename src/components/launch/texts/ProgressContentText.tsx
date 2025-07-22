import { Colors } from "@/constants/Color";
import { Box, Typography } from "@mui/material";

interface ProgressContentTextProps {
    label: string;
    answer: string;
}

const ProgressContentText: React.FC<ProgressContentTextProps> = ({ label, answer }) => {
    return (
        <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
            variant="body2"
            color={Colors.TEXT_SECONDARY}
            fontWeight={500}
            sx={{ 
                fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.85rem' },
                mb: 0.5,
                opacity: 1,
            }}
            >
            {label}
            </Typography>
            <Typography
                variant="body2"
                color={Colors.TEXT}
                sx={{
                fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                fontWeight: 500,
                opacity: 0.9,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                lineHeight: 1.3,
                }}
            >
                {answer}
            </Typography>
        </Box>
    );
}

export default ProgressContentText;