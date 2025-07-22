"use client";

import { Colors } from "@/constants/Color";
import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next/navigation";

const MobileLaunchButton: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Fab
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 24,
          background: Colors.SECONDARY,
          color: '#fff',
          boxShadow: Colors.SHADOW_GLOW,
          width: 44,
          height: 44,
          minHeight: 0,
        }}
        onClick={() => { router.push("/launch"); }}
        size="small"
        aria-label="Create New Idea"
      >
        <AddIcon fontSize="small" />
      </Fab>
    </>
  );
};

export default MobileLaunchButton;