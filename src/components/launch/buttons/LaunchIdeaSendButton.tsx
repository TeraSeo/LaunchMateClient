import { Colors } from "@/constants/Color";
import { IconButton, Tooltip } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

interface LaunchIdeaSendButtonProps {
    handleSend: () => void;
    loading: boolean;
    thinking: boolean;
    isInputFilled: boolean
}

const LaunchIdeaSendButton: React.FC<LaunchIdeaSendButtonProps> = ({ handleSend, loading, thinking, isInputFilled }) => {
    return (
        <Tooltip title="Send" arrow>
            <span>
                <IconButton
                color="primary"
                onClick={handleSend}
                disabled={loading || thinking || isInputFilled}
                sx={{
                    background: Colors.SECONDARY,
                    color: '#fff',
                    borderRadius: 2,
                    p: { xs: 0.5, sm: 0.7, md: 1 },
                    '&:hover': { background: Colors.SECONDARY_DARK },
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                    boxShadow: Colors.SHADOW_GLOW,
                    transition: 'background 0.2s, box-shadow 0.2s',
                    minWidth: { xs: 26, sm: 30, md: 34 },
                    minHeight: { xs: 26, sm: 30, md: 34 },
                }}
                >
                <RocketLaunchIcon sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }} />
                </IconButton>
            </span>
            </Tooltip>
    );
}

export default LaunchIdeaSendButton;