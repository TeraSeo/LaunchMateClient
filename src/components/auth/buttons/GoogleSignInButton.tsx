import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import { Button } from "@mui/material";
import Image from "next/image";

const GoogleSignInButton: React.FC = () => {
    const handleGoogleLogin = () => {
        alert('Google Login');
    };

    return (
        <Button
            fullWidth
            onClick={handleGoogleLogin}
            sx={{
              background: '#fff',
              color: '#222',
              fontWeight: 600,
              fontSize: fontSize.login.google,
              borderRadius: { xs: 2, sm: 3 },
              py: { xs: 1, sm: 1.3 },
              mb: { xs: 1.5, sm: 2 },
              boxShadow: Colors.SHADOW_LIGHT,
              border: `1.5px solid ${Colors.ACCENT}`,
              '&:hover': {
                background: Colors.ACCENT_LIGHT,
                color: Colors.SECONDARY,
                borderColor: Colors.SECONDARY_LIGHT,
              },
              textTransform: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <Image src="/images/google-logo.png" alt="Google logo" width={20} height={20} />
                Continue with Google
        </Button>
    );
}

export default GoogleSignInButton;