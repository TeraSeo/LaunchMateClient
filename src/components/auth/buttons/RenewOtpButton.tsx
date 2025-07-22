'use client';

import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import { Button, Stack, Typography } from "@mui/material";

interface RenewOtpButtonProps {
  onClick: () => void;
  disabled: boolean;
  cooldown: number;
  feedback: string;
}

const RenewOtpButton: React.FC<RenewOtpButtonProps> = ({
  onClick,
  disabled,
  cooldown,
  feedback,
}) => {
  return (
    <Stack direction="column" alignItems="center" spacing={1} mt={{ xs: 2, sm: 3 }}>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Typography sx={{ color: Colors.TEXT_SECONDARY, fontSize: fontSize.login.bottomText, mr: 1 }}>
          Didn&apos;t receive a code?
        </Typography>
        <Button
          onClick={onClick}
          disabled={disabled}
          sx={{
            color: Colors.SECONDARY,
            fontWeight: 700,
            fontSize: fontSize.login.bottomButtonText,
            textTransform: 'none',
            px: 1,
            '&:hover': {
              textDecoration: 'underline',
              background: 'transparent',
            },
            '&.Mui-disabled': {
              color: Colors.SECONDARY_LIGHT,
            },
          }}
        >
          {cooldown > 0 ? `Resend OTP (${cooldown}s)` : 'Resend OTP'}
        </Button>
      </Stack>
      {feedback && (
        <Typography sx={{ fontSize: '0.9rem', color: Colors.SUCCESS }}>
          {feedback}
        </Typography>
      )}
    </Stack>
  );
};

export default RenewOtpButton;