import { fontSize } from "@/constants/FontSize";
import { Box, Typography } from "@mui/material";

const AboutTitleText: React.FC = () => {
    return (
        <Typography
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{
                fontSize: fontSize.about.title
            }}
        >
            Transform Your Ideas Into{' '}
            <Box component="span" sx={{ background: 'linear-gradient(135deg, #2979FF 0%, #5B9AFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Business Plans
            </Box>
        </Typography>
    );
}

export default AboutTitleText;