import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import { Typography } from "@mui/material";

interface IdeaStatusTextProps {
    isCompleted: boolean
}

const IdeaStatusText: React.FC<IdeaStatusTextProps> = ({ isCompleted }) => {
    return (
        <Typography
            fontWeight={600}
            color={
                isCompleted
                ? Colors.SUCCESS
                : Colors.TEXT_SECONDARY
            }
            sx={{ fontSize: fontSize.dashboard.label4 }}
        >
            {isCompleted ? 'Completed' : 'Ongoing'}
        </Typography>
    );
}

export default IdeaStatusText;