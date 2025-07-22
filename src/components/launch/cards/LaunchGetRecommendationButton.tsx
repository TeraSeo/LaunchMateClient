import { useEffect, useState } from "react";
import { Colors } from "@/constants/Color";
import { IconButton, Tooltip } from "@mui/material";
import LightbulbIcon from '@mui/icons-material/Lightbulb';

interface LaunchGetRecommendationButtonProps {
    handleRecommend: () => void;
    loading: boolean;
    thinking: boolean;
}

const LaunchGetRecommendationButton: React.FC<LaunchGetRecommendationButtonProps> = ({ handleRecommend, loading, thinking }) => {
    const [showInstruction, setShowInstruction] = useState(true);

    useEffect(() => {
        if (showInstruction) {
            const timer = setTimeout(() => setShowInstruction(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [showInstruction]);

    return (
        <Tooltip
            title="Get a tailored idea recommendation 💡"
            arrow
            open={showInstruction}
            disableHoverListener
            disableFocusListener
            disableTouchListener
            placement="top"
        >
            <span>
                <IconButton
                    color="primary"
                    onClick={handleRecommend}
                    disabled={loading || thinking}
                    sx={{
                        background: Colors.BACKGROUND_LIGHT,
                        color: Colors.SECONDARY,
                        borderRadius: 2,
                        p: { xs: 0.5, sm: 0.7, md: 1 },
                        ml: 0.5,
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                        boxShadow: Colors.SHADOW_GLOW,
                        border: `1.5px solid ${Colors.SECONDARY}`,
                        transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
                        minWidth: { xs: 26, sm: 30, md: 34 },
                        minHeight: { xs: 26, sm: 30, md: 34 },
                    }}
                >
                    <LightbulbIcon sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }} />
                </IconButton>
            </span>
        </Tooltip>
    );
}

export default LaunchGetRecommendationButton;