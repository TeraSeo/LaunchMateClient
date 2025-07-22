import React from "react";
import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import size from "@/constants/Size";
import { LoadingButton } from "@mui/lab";

interface RegisterButtonProps {
  loading?: boolean;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ loading = false }) => {
  return (
    <LoadingButton
      type="submit"
      variant="contained"
      fullWidth
      size="large"
      loading={loading}
      sx={{
        mt: 1,
        borderRadius: size.loginButton.borderRadius,
        fontWeight: 700,
        fontSize: fontSize.login.button,
        background: Colors.GRADIENT_SECONDARY,
        color: '#fff',
        boxShadow: Colors.SHADOW_GLOW,
        py: size.loginButton.py,
        '&:hover': {
          background: Colors.SECONDARY_DARK,
        },
      }}
    >
      Register
    </LoadingButton>
  );
};

export default RegisterButton;