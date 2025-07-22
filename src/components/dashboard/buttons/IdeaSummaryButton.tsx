import { fontSize } from "@/constants/FontSize";
import { Button } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';

const IdeaSummaryButton: React.FC = () => {
    return (
        <Button
            size="small"
            variant="outlined"
            startIcon={<DescriptionIcon />}
            sx={{
            borderRadius: 2,
            fontSize: fontSize.dashboard.button,
            }}
        >
            Summary
        </Button>
    );
}

export default IdeaSummaryButton;