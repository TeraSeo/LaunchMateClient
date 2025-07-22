import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import { Typography } from "@mui/material";

interface IdeaCreatedAtTextProps {
    createdAt: string
}

const IdeaCreatedAtText: React.FC<IdeaCreatedAtTextProps> = ({ createdAt }) => {
    return (
        <Typography
            color={Colors.TEXT_SECONDARY}
            sx={{ fontSize: fontSize.dashboard.label3 }}
        >
            Created: {createdAt}
        </Typography>
    );
}

export default IdeaCreatedAtText;