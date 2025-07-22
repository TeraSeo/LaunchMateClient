"use client";

import { fontSize } from "@/constants/FontSize";
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from "next/navigation";

interface ContinueButtonProps {
    ideaId: number;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ ideaId }) => {
    const router = useRouter();

    return (
        <Button
            size="small"
            variant="outlined"
            onClick={() => { router.push(`/launch/idea/${ideaId}`) }}
            endIcon={<ArrowForwardIcon />}
            sx={{
                borderRadius: 2,
                fontSize: fontSize.dashboard.button,
                textTransform: 'none',
            }}
        >
            Continue
        </Button>
    );
};

export default ContinueButton;