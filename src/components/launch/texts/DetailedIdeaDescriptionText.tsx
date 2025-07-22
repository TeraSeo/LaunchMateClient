import { Colors } from "@/constants/Color";
import { Box, Typography } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';

interface DetailedIdeaDescriptionTextProps {
    description: string;
}

const DetailedIdeaDescriptionText: React.FC<DetailedIdeaDescriptionTextProps> = ({ description }) => {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography
            variant="subtitle1"
            sx={{
                color: Colors.SECONDARY,
                fontWeight: 700,
                fontSize: { xs: '1.05rem', sm: '1.13rem', md: '1.18rem' },
                mb: 0.5,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
            }}
            >
            <DescriptionIcon sx={{ fontSize: 22 }} /> Description
            </Typography>
            <Typography variant="body2" sx={{ color: Colors.TEXT, fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' } }}>
                {description}
            </Typography>
        </Box>
    );
}

export default DetailedIdeaDescriptionText;