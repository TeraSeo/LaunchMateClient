"use client";

import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const NavigateToLoginButton: React.FC = () => {
    const router = useRouter();

    return (
        <Stack direction="row" justifyContent="center" alignItems="center" mt={{ xs: 3, sm: 4 }}>
            <Typography sx={{ color: Colors.TEXT_SECONDARY, fontSize: fontSize.login.bottomText, mr: 1 }}>
              Already have an account?
            </Typography>
            <Button
              onClick={() => router.push('/login')}
              sx={{
                color: Colors.SECONDARY,
                fontWeight: 700,
                fontSize: fontSize.login.bottomButtonText,
                textTransform: 'none',
                px: 1,
                '&:hover': { textDecoration: 'underline', background: 'transparent' },
              }}
            >
              Login
            </Button>
          </Stack>
    );
}

export default NavigateToLoginButton;