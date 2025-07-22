import { fontSize } from "@/constants/FontSize";
import { Typography } from "@mui/material";

interface IdeaTitleTextProps {
    title: string
}

const IdeaTitleText: React.FC<IdeaTitleTextProps> = ({ title }) => {
    return (
        <Typography
            variant="h6"
            fontWeight={700}
            sx={{ fontSize: fontSize.dashboard.ideaTitle }}
        >
            {title}
        </Typography>
    );
}

export default IdeaTitleText;