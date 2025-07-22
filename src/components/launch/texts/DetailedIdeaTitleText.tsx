import { Colors } from "@/constants/Color";
import { Box, Typography } from "@mui/material";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

interface DetailedIdeaTitleTextProps {
    startupTitle: string;
}

const DetailedIdeaTitleText: React.FC<DetailedIdeaTitleTextProps> = ({ startupTitle }) => {
    return (
        <Box sx={{ mb: 3 }}>
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
                <EmojiObjectsIcon sx={{ fontSize: 22 }} /> Startup Title
            </Typography>
            <Typography variant="body2" sx={{ color: Colors.TEXT, fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' } }}>
                {startupTitle}
            </Typography>
        </Box>
    );
}

export default DetailedIdeaTitleText;