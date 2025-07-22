import { fontSize } from "@/constants/FontSize";
import { Button } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useRouter } from "next/navigation";

interface ViewDetailsButtonProps {
    ideaId: number;
}

const ViewDetailsButton: React.FC<ViewDetailsButtonProps> = ({ ideaId }) => {
    const router = useRouter();

    return (
        <Button
            size="small"
            variant="outlined"
            startIcon={<InfoOutlinedIcon />}
            onClick={() => { router.push(`/detail/${ideaId}`) }}
            sx={{
                borderRadius: 2,
                fontSize: fontSize.dashboard.button,
            }}
        >
            Details
        </Button>
    );
};

export default ViewDetailsButton;