import { fontSize } from "@/constants/FontSize";
import { Box } from "@mui/material";

interface PriceFeaturesProps {
    features: string[];
}

const PriceFeatures: React.FC<PriceFeaturesProps> = ({ features }) => {
    return (
        <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
          {features.map((feature, index) => (
            <Box
              key={index}
              component="li"
              sx={{
                py: 1,
                borderBottom:
                  index < features.length - 1
                    ? "1px solid rgba(255, 255, 255, 0.1)"
                    : "none",
                color: "text.secondary",
                fontSize: fontSize.pricing.feature,
              }}
            >
              {feature}
            </Box>
          ))}
        </Box>
    );
}

export default PriceFeatures;