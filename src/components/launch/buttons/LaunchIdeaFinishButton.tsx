import { Colors } from "@/constants/Color";
import { Box, Button } from "@mui/material";

interface LaunchIdeaFinishButtonProps {
    handleFinish: () => void;
}

const LaunchIdeaFinishButton: React.FC<LaunchIdeaFinishButtonProps> = ({ handleFinish }) => {
    return (
        <Box sx={{ textAlign: 'end', mt: 4 }}>
            <Button
                variant="contained"
                size="large"
                onClick={handleFinish}
                sx={{
                    background: Colors.GRADIENT_SECONDARY,
                    color: '#fff',
                    borderRadius: 3,
                    fontWeight: 700,
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                    py: { xs: 1, sm: 1.2, md: 1.5 },
                    px: { xs: 2.5, sm: 3, md: 3.5 },
                    boxShadow: Colors.SHADOW_GLOW,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                    background: Colors.SECONDARY_DARK,
                    transform: 'translateY(-2px)',
                    boxShadow: Colors.SHADOW_HEAVY,
                    },
                    minHeight: { xs: 44, sm: 48, md: 52 },
                    minWidth: { xs: 120, sm: 140, md: 160 },
                }}
                >
            Finish
            </Button>
        </Box>
    );
}

export default LaunchIdeaFinishButton;