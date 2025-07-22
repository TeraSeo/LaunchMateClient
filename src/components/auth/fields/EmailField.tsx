import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import { Stack, TextField, Typography } from "@mui/material";

interface EmailFieldProps {
    email: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const EmailField: React.FC<EmailFieldProps> = ({ email, handleChange }) => {
    return (
        <Stack spacing={0.8}>
            <Typography sx={{
                fontWeight: 600,
                fontSize: fontSize.login.label,
                color: Colors.TEXT
            }}>
                Email
            </Typography>
            <TextField
                placeholder="Enter your email"
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                required
                fullWidth
                autoComplete="email"
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

export default EmailField;