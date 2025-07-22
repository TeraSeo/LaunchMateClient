"use client";

import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const NavigateToRegisterButton: React.FC = () => {
    const router = useRouter();

    return (
        <Stack direction="row" justifyContent="center" alignItems="center" mt={{ xs: 3, sm: 4 }}>
            <Typography sx={{ color: Colors.TEXT_SECONDARY, fontSize: fontSize.login.bottomText, mr: 1 }}>
              Don't have an account?
            </Typography>
            <Button
              onClick={() => router.push('/register')}
              sx={{
                color: Colors.SECONDARY,
                fontWeight: 700,
                fontSize: fontSize.login.bottomButtonText,
                textTransform: 'none',
                px: 1,
                '&:hover': { textDecoration: 'underline', background: 'transparent' },
              }}
            >
              Register
            </Button>
        </Stack>
    );
}

export default NavigateToRegisterButton;