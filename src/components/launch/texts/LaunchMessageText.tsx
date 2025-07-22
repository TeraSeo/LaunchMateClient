import { Colors } from "@/constants/Color";
import { Box, Fade, IconButton, Tooltip } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

interface LaunchMessageTextProps {
    idx: number;
    role: string;
    text: string; 
    showConfirm: boolean | undefined;
    handleConfirmIdea: (idx: number) => void;
    confirmedIdx: number | null;
}

const LaunchMessageText: React.FC<LaunchMessageTextProps> = ({ idx, role, text, showConfirm,handleConfirmIdea, confirmedIdx }) => {
    return (
        <Fade in key={idx}>
            <Box
                sx={{
                display: 'flex',
                flexDirection: role === 'user' ? 'row-reverse' : 'row',
                alignItems: 'flex-end',
                }}
            >
                <Box
                    sx={{
                        maxWidth: { xs: '95%', md: '75%' },
                        bgcolor: role === 'user' ? Colors.SECONDARY : Colors.BACKGROUND,
                        color: role === 'user' ? '#fff' : Colors.TEXT,
                        borderRadius: 2,
                        px: { xs: 1.2, sm: 1.7, md: 2.2 },
                        py: { xs: 0.8, sm: 1.1, md: 1.3 },
                        boxShadow: role === 'user' ? Colors.SHADOW_GLOW : Colors.SHADOW_LIGHT,
                        fontSize: { xs: '0.8rem', sm: '0.9rem', md: '0.98rem' },
                        whiteSpace: 'pre-line',
                        wordBreak: 'break-word',
                        position: 'relative',
                        border: 'none',
                        transition: 'box-shadow 0.2s, border 0.2s',
                    }}
                >
                {text}
                {showConfirm && (
                    <Box sx={{ mt: 0.5, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                    <Tooltip title="Confirm this idea" arrow>
                        <span>
                        <IconButton
                            onClick={() => handleConfirmIdea(idx)}
                            sx={{
                            background: confirmedIdx === idx ? Colors.SECONDARY : Colors.BACKGROUND_LIGHT,
                            color: confirmedIdx === idx ? '#fff' : Colors.SECONDARY,
                            borderRadius: 2,
                            boxShadow: Colors.SHADOW_GLOW,
                            ml: 1,
                            '&:hover': { background: Colors.SECONDARY_DARK, color: '#fff' },
                            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                            p: { xs: 0.4, sm: 0.6, md: 0.8 },
                            opacity: confirmedIdx === idx ? 1 : 0.85,
                            }}
                            disabled={confirmedIdx === idx}
                        >
                            <StarIcon sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }} />
                        </IconButton>
                        </span>
                    </Tooltip>
                    </Box>
                )}
                </Box>
            </Box>
        </Fade>
    );
}

export default LaunchMessageText;