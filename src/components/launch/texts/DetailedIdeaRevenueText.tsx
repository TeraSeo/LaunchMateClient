import { Box, Typography } from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Colors } from "@/constants/Color";

interface DetailedIdeaRevenueTextProps {
    revenue: string;
}

const DetailedIdeaRevenueText: React.FC<DetailedIdeaRevenueTextProps> = ({ revenue }) => {
    return (
        <Box>
            <Typography variant="subtitle1" sx={{ color: Colors.SECONDARY, fontWeight: 700, mb: 0.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                <MonetizationOnIcon sx={{ fontSize: 22 }} /> Revenue Model
            </Typography>
            <Typography variant="body2" sx={{ color: Colors.TEXT, fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' } }}>
                {revenue}
            </Typography>
        </Box>
    );
}

export default DetailedIdeaRevenueText;