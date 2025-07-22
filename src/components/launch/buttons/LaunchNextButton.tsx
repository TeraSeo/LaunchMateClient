import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import size from "@/constants/Size";

interface LaunchNextButtonProps {
  input: string;
  selected: string | null;
  handleNext: () => void;
  activeStep: number;
  totalSteps: number;
}

const LaunchNextButton: React.FC<LaunchNextButtonProps> = ({
  input,
  selected,
  handleNext,
  activeStep,
  totalSteps,
}) => {
  return (
    <Button
      variant="contained"
      endIcon={<ArrowForwardIcon />}
      disabled={!input.trim() && !selected}
      onClick={handleNext}
      sx={{
        borderRadius: size.launchButton.borderRadius,
        fontWeight: 600,
        px: size.launchButton.px,
        height: size.launchButton.height,
        fontSize: fontSize.launchButton,
        background: Colors.GRADIENT_SECONDARY,
        color: "#fff",
        boxShadow: Colors.SHADOW_GLOW,
      }}
    >
      {activeStep === totalSteps - 1 ? "Finish" : "Next"}
    </Button>
  );
};

export default LaunchNextButton;