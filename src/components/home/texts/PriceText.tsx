import { fontSize } from "@/constants/FontSize";
import { Typography } from "@mui/material";

interface PriceTextProps {
    price: string;
}

const PriceText: React.FC<PriceTextProps> = ({ price }) => {
    return (
        <Typography
            variant="h3" 
            component="div" 
            color="primary" 
            gutterBottom
            sx={{ fontSize: fontSize.pricing.price }}
        >
            {price}
        </Typography>
    );
}

export default PriceText;