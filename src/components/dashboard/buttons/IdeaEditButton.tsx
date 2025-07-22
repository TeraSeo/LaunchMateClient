import { fontSize } from "@/constants/FontSize";
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

const IdeaEditButton: React.FC = () => {
    return (
        <Button
            size="small"
            variant="outlined"
            startIcon={<EditIcon />}
            sx={{
            borderRadius: 2,
            fontSize: fontSize.dashboard.button,
            }}
        >
            Edit
        </Button>
    );
}

export default IdeaEditButton;