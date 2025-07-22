import { Colors } from "@/constants/Color";
import { TextField } from "@mui/material";

interface LaunchIdeaInputFieldProps {
    input: string;
    setInput: (value: string) => void;
    handleInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    loading: boolean;
}

const LaunchIdeaInputField: React.FC<LaunchIdeaInputFieldProps> = ({ input, setInput, handleInputKeyDown, loading }) => {
    return (
        <TextField
            fullWidth
            placeholder="Describe your startup idea..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleInputKeyDown}
            disabled={loading}
            size="small"
            sx={{
                bgcolor: Colors.BACKGROUND_LIGHT,
                borderRadius: 2,
                input: {
                color: Colors.TEXT,
                fontSize: { xs: '0.78rem', sm: '0.85rem', md: '0.92rem' },
                fontWeight: 500,
                letterSpacing: 0.1,
                background: 'none',
                py: { xs: 0.5, sm: 0.7, md: 0.9 },
                },
                boxShadow: Colors.SHADOW_LIGHT,
                border: `1.5px solid ${Colors.SECONDARY_LIGHT}`,
                '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
                },
                '&:hover, &:focus-within': {
                borderColor: Colors.SECONDARY,
                boxShadow: Colors.SHADOW_GLOW,
                },
            }}
            InputProps={{
                sx: {
                background: 'none',
                minHeight: { xs: 24, sm: 28, md: 32 },
                px: { xs: 0.3, sm: 0.7 },
                },
            }}
            />
    );
}

export default LaunchIdeaInputField;