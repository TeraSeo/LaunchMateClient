import React from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import size from "@/constants/Size";

interface LaunchBackButtonProps {
  activeStep: number;
  handleBack: () => void;
}

const LaunchBackButton: React.FC<LaunchBackButtonProps> = ({
  activeStep,
  handleBack,
}) => {
  return (
    <Button
      variant="outlined"
      startIcon={<ArrowBackIcon />}
      disabled={activeStep === 0}
      onClick={handleBack}
      sx={{
        borderRadius: size.launchButton.borderRadius,
        fontWeight: 500,
        px: size.launchButton.px,
        height: size.launchButton.height,
        fontSize: fontSize.launchButton,
        color: Colors.SECONDARY,
        borderColor: Colors.SECONDARY,
        background: "transparent",
        "&:hover": {
          borderColor: Colors.SECONDARY_LIGHT,
          background: Colors.SECONDARY_LIGHT,
          color: "#fff",
        },
      }}
    >
      Back
    </Button>
  );
};

export default LaunchBackButton;