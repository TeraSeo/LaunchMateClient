import { fontSize } from "@/constants/FontSize";
import { Button } from "@mui/material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const IdeaPdfButton: React.FC = () => {
    return (
        <Button
            size="small"
            variant="outlined"
            startIcon={<PictureAsPdfIcon />}
            sx={{
            borderRadius: 2,
            fontSize: fontSize.dashboard.button,
            }}
        >
            PDF
        </Button>
    );
}

export default IdeaPdfButton;