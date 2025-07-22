import { Colors } from "@/constants/Color";
import { Box, Button, Tooltip } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface LaunchIdeaNextButtonProps {
    confirmedIdx: number | null;
    handleNext: () => void
}

const LaunchIdeaNextButton: React.FC<LaunchIdeaNextButtonProps> = ({ confirmedIdx, handleNext }) => {
    return (
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <Tooltip title={confirmedIdx !== null ? "Proceed to next step" : "Confirm your idea to continue"} arrow>
                <span>
                <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }} />}
                    disabled={confirmedIdx === null}
                    onClick={handleNext}
                    sx={{
                    borderRadius: 2,
                    fontWeight: 700,
                    fontSize: { xs: '0.75rem', sm: '0.82rem', md: '0.9rem' },
                    background: confirmedIdx !== null ? Colors.GRADIENT_SECONDARY : Colors.ACCENT_DARK,
                    color: '#fff',
                    boxShadow: confirmedIdx !== null ? Colors.SHADOW_GLOW : 'none',
                    py: { xs: 0.5, sm: 0.7, md: 0.9 },
                    px: { xs: 1, sm: 1.5, md: 2 },
                    opacity: confirmedIdx !== null ? 1 : 0.7,
                    pointerEvents: confirmedIdx !== null ? 'auto' : 'none',
                    transition: 'background 0.2s, box-shadow 0.2s, opacity 0.2s',
                    '&:hover': {
                        background: confirmedIdx !== null ? Colors.SECONDARY_DARK : Colors.ACCENT_DARK,
                    },
                    minHeight: { xs: 22, sm: 26, md: 30 },
                    minWidth: { xs: 44, sm: 60, md: 80 },
                    }}
                >
                    Next
                </Button>
                </span>
            </Tooltip>
        </Box>
    );
}

export default LaunchIdeaNextButton;