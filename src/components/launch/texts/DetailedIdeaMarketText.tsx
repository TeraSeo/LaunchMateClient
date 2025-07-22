import { Box, Typography } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Colors } from "@/constants/Color";

interface DetailedIdeaMarketTextProps {
    market: string
}

const DetailedIdeaMarketText: React.FC<DetailedIdeaMarketTextProps> = ({ market }) => {
    return (
        <Box>
            <Typography variant="subtitle1" sx={{ color: Colors.SECONDARY, fontWeight: 700, mb: 0.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                <TrendingUpIcon sx={{ fontSize: 22 }} /> Market Analysis
            </Typography>
            <Typography variant="body2" sx={{ color: Colors.TEXT, fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' } }}>
                {market}
            </Typography>
        </Box>
    );
}

export default DetailedIdeaMarketText;