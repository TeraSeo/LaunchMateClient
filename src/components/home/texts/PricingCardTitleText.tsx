import { fontSize } from "@/constants/FontSize";
import { Typography } from "@mui/material";

interface PricingCardTitleTextProps {
  title: string;
}

const PricingCardTitleText: React.FC<PricingCardTitleTextProps> = ({ title }) => {
  return (
    <Typography
      variant="h5" 
      component="h3" 
      gutterBottom
      sx={{ fontSize: fontSize.pricing.title }}
    >
      {title}
    </Typography>
  );
};

export default PricingCardTitleText;