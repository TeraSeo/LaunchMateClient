import { fontSize } from "@/constants/FontSize";
import { Button } from "@mui/material";

const AboutWatchDemoButton: React.FC = () => {
    return (
        <Button
            variant="outlined" 
            size="large"
            sx={{ fontSize: fontSize.button.large }}
        >
            Watch Demo
        </Button>
    );
}

export default AboutWatchDemoButton;