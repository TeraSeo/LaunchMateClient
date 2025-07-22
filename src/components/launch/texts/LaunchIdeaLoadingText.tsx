import { Colors } from "@/constants/Color";
import { Box, Fade } from "@mui/material";

interface LaunchIdeaLoadingTextProps {
    loading: boolean;
    thinking: boolean;
    dotCount: number
}

const LaunchIdeaLoadingText: React.FC<LaunchIdeaLoadingTextProps> = ({ loading, thinking, dotCount }) => {
    return (
        (loading || thinking) && (
            <Fade in>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1.2 }}>
                    <Box
                        sx={{
                        maxWidth: { xs: '95%', md: '75%' },
                        bgcolor: Colors.BACKGROUND_LIGHT,
                        color: Colors.TEXT_SECONDARY,
                        borderRadius: 2,
                        px: { xs: 1.2, sm: 1.7, md: 2.2 },
                        py: { xs: 0.8, sm: 1.1, md: 1.3 },
                        fontSize: { xs: '0.8rem', sm: '0.9rem', md: '0.98rem' },
                        opacity: 0.85,
                        fontStyle: 'italic',
                        border: 'none',
                        minWidth: 120,
                        letterSpacing: 1,
                        transition: 'background 0.2s',
                        }}
                    >
                        {`Thinking${'.'.repeat(dotCount)}`}
                    </Box>
                </Box>
            </Fade>
        )
    );
}

export default LaunchIdeaLoadingText;