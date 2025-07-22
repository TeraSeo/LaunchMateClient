import { Colors } from "@/constants/Color";
import { Typography } from "@mui/material";

const ProgressOverviewTitleText: React.FC = () => {
    return (
        <Typography
                variant="h6"
                fontWeight={600}
                color={Colors.TEXT}
                mb={2}
                sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1.1rem' } }}
              >
                Progress Overview
        </Typography>
    );
}

export default ProgressOverviewTitleText;