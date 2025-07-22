import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import { IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface PasswordFieldProps {
    password: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PasswordField: React.FC<PasswordFieldProps> = ({ password, handleChange }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => setShowPassword((prev) => !prev);
    return (
        <Stack spacing={0.8}>
            <Typography sx={{
                fontWeight: 600,
                fontSize: fontSize.login.label,
                color: Colors.TEXT
            }}>
                Password
            </Typography>
            <TextField
                placeholder="Enter your password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handleChange}
                required
                fullWidth
                autoComplete="current-password"
                variant="outlined"
                InputProps={{
                sx: {
                    fontSize: fontSize.login.input,
                    color: Colors.TEXT,
                    borderRadius: { xs: 2, sm: 3 },
                    background: Colors.PRIMARY_LIGHT
                },
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleTogglePassword}
                            edge="end"
                            sx={{ color: Colors.SECONDARY }}
                            aria-label="Show password"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
                }}
            />
        </Stack>
    );
}

export default PasswordField;