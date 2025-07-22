import { Colors } from "@/constants/Color";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const DetailedIdeaHeaderCard: React.FC = () => {
    return (
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 5,
            gap: 1,
            }}
        >
            <CheckCircleIcon sx={{ fontSize: { xs: 54, sm: 64, md: 72 }, color: Colors.SECONDARY, mb: 1 }} />
            <Typography
            variant="h3"
            sx={{
                fontWeight: 900,
                color: Colors.SECONDARY_DARK,
                fontSize: { xs: '2rem', sm: '2.3rem', md: '2.7rem' },
                letterSpacing: '-1px',
                mb: 0.5,
            }}
            >
            Your Startup Idea is Ready!
            </Typography>
            <Typography
            variant="body1"
            sx={{
                color: Colors.TEXT_SECONDARY,
                fontSize: { xs: '1.08rem', sm: '1.15rem', md: '1.22rem' },
                mb: 1.5,
                fontWeight: 500,
            }}
            >
            Here’s your confirmed startup idea, beautifully structured for your next steps.
            </Typography>
        </Box>
    );
}

export default DetailedIdeaHeaderCard;