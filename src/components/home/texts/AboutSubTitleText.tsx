import { fontSize } from "@/constants/FontSize";
import { Typography } from "@mui/material";

const AboutSubTitleText: React.FC = () => {
    return (
        <Typography
            variant="body1" 
            color="text.secondary" 
            sx={{ 
                mb: 4, 
                maxWidth: 500,
                fontSize: fontSize.about.subtitle
            }}
        >
            LaunchMate uses AI to automatically generate comprehensive startup business plans 
            from just your idea keywords. From market analysis to pitch decks, we&apos;ve got you covered.
        </Typography>
    );
}

export default AboutSubTitleText;