import { Button } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { fontSize } from "@/constants/FontSize";
import { Colors } from "@/constants/Color";
import size from "@/constants/Size";

const ReadTutorialButton: React.FC = () => {
    return (
        <Button endIcon={<ArrowForwardIosIcon />} size="small" sx={{ mt: 1.5, fontSize: fontSize.dashboard.button, fontWeight: 600, color: Colors.SECONDARY, borderRadius: 2, px: size.readTutorial.px, py: size.readTutorial.py }}>
            Read Tutorial
        </Button>
    );
}

export default ReadTutorialButton;