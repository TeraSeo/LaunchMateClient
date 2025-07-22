import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import { Stack, TextField, Typography } from "@mui/material";

interface UsernameFieldProps {
    username: string, 
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const UsernameField: React.FC<UsernameFieldProps> = ({ username, handleChange }) => {
    return (
        <Stack spacing={0.8}>
            <Typography sx={{
                fontWeight: 600,
                fontSize: fontSize.login.label,
                color: Colors.TEXT
            }}>
                Username
            </Typography>
            <TextField
                placeholder="Enter your username"
                name="username"
                type="text"
                value={username}
                onChange={handleChange}
                required
                fullWidth
                autoComplete="username"
                variant="outlined"
                InputProps={{
                sx: {
                    fontSize: fontSize.login.input,
                    color: Colors.TEXT,
                    borderRadius: { xs: 2, sm: 3 },
                    background: Colors.PRIMARY_LIGHT
                },
                }}
            />
        </Stack>
    );
}

export default UsernameField;