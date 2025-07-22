"use client";

import { Colors } from "@/constants/Color";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next/navigation";

const LaunchButton: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{
          fontWeight: 700,
          borderRadius: 2,
          background: Colors.GRADIENT_SECONDARY,
          boxShadow: Colors.SHADOW_GLOW,
        }}
        onClick={() => { router.push("/launch"); }}
      >
        Create New Idea
      </Button>
    </>
  );
};

export default LaunchButton;