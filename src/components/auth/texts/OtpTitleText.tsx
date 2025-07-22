import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import { Typography } from "@mui/material";

const OtpTitleText: React.FC = () => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                sx={{
                fontWeight: 800,
                mb: { xs: 1.5, sm: 2 },
                color: Colors.TEXT,
                letterSpacing: '-1px',
                fontSize: fontSize.login.title,
                }}
            >
            OTP Verification
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
            Please enter the 4-digit code sent to your email.
          </Typography>

        </>
    );
}

export default OtpTitleText;