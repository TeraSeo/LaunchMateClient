import { Colors } from "@/constants/Color";
import { Box, Typography } from "@mui/material";
import InsightsIcon from '@mui/icons-material/Insights';

interface DetailedIdeaPlanSummaryTextProps {
    summary: string;
}

const DetailedIdeaPlanSummaryText: React.FC<DetailedIdeaPlanSummaryTextProps> = ({ summary }) => {
    return (
        <>
            <Box>
                <Typography variant="subtitle1" sx={{ color: Colors.SECONDARY, fontWeight: 700, mb: 0.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <InsightsIcon sx={{ fontSize: 22 }} /> Business Plan Summary
                </Typography>
                <Typography variant="body2" sx={{ color: Colors.TEXT, fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' } }}>
                    {summary}
                </Typography>
            </Box>
        </>
    );
}

export default DetailedIdeaPlanSummaryText;