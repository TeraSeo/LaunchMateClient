'use client';

import { fontSize } from "@/constants/FontSize";
import { Button } from "@mui/material";
import { PlayArrow } from '@mui/icons-material';
import { useRouter } from "next/navigation";

const AboutCreateButton: React.FC = () => {
    const router = useRouter();

    return (
        <Button
            variant="contained" 
            size="large" 
            startIcon={<PlayArrow />}
            sx={{ fontSize: fontSize.button.large }}
            onClick={() => router.push('/dashboard')}
        >
            Start Creating Now
        </Button>
    );
}

export default AboutCreateButton;