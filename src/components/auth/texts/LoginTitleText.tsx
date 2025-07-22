import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import { Typography } from "@mui/material";

const LoginTitleText: React.FC = () => {
    return (
        <>
            <Typography
                variant="h3"
                align="center"
                sx={{
                fontWeight: 800,
                mb: { xs: 1.5, sm: 2 },
                color: Colors.TEXT,
                letterSpacing: '-1px',
                fontSize: fontSize.login.title,
                }}
            >
                Login
          </Typography>
          <Typography
                align="center"
                sx={{
                mb: { xs: 3, sm: 4 },
                color: Colors.TEXT_SECONDARY,
                fontSize: fontSize.login.subTitle,
                fontWeight: 400,
                }}
            >
                Welcome back! Please login to your LaunchMate account to continue.
          </Typography>
        </>
    );
}

export default LoginTitleText;