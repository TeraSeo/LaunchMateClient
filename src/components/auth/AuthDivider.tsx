import { Colors } from "@/constants/Color";
import { Divider } from "@mui/material";

const AuthDivider: React.FC = () => {
    return (
        <Divider sx={{ my: { xs: 2, sm: 3 }, color: Colors.ACCENT_DARK, fontWeight: 500 }}>or</Divider>
    );  
}

export default AuthDivider;