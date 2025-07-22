import { Colors } from "@/constants/Color";
import { Box, Typography } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';

interface DetailedIdeaCompetitorTextProps {
    competitor: string
}

const DetailedIdeaCompetitorText: React.FC<DetailedIdeaCompetitorTextProps> = ({ competitor }) => {
    return (
        <Box>
            <Typography variant="subtitle1" sx={{ color: Colors.SECONDARY, fontWeight: 700, mb: 0.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                <GroupsIcon sx={{ fontSize: 22 }} /> Competitor Analysis
            </Typography>
            <Typography variant="body2" sx={{ color: Colors.TEXT, fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' } }}>
                {competitor}
            </Typography>
        </Box>
    );
}

export default DetailedIdeaCompetitorText;