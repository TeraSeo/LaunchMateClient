import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import { Typography } from "@mui/material";

const DashboardMainContentTitleText: React.FC = () => {
    return (
        <Typography
            variant="h5"
            fontWeight={700}
            color={Colors.TEXT}
            sx={{
              fontSize: fontSize.dashboard.subTitle,
              pl: 1,
              pt: 1,
            }}
          >
            My Ideas
        </Typography>
    );
}

export default DashboardMainContentTitleText;