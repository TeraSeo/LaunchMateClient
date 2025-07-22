import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";
import size from "@/constants/Size";
import { RefObject } from "react";

interface LaunchInputProps {
  inputRef: RefObject<HTMLInputElement | null>;
  input: string;
  setInput: (val: string) => void;
  setSelected: (val: string | null) => void;
  handleInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const LaunchInput: React.FC<LaunchInputProps> = ({
  inputRef,
  input,
  setInput,
  setSelected,
  handleInputKeyDown,
}) => {
  return (
    <TextField
      inputRef={inputRef}
      value={input}
      onChange={e => {
        setInput(e.target.value);
        setSelected(null);
      }}
      onKeyDown={handleInputKeyDown}
      placeholder="Search or type your answer"
      variant="standard"
      inputProps={{ maxLength: 80 }}
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: Colors.SECONDARY_LIGHT }} />
          </InputAdornment>
        ),
        sx: {
          fontSize: fontSize.launchInput,
          background: 'transparent',
          color: Colors.TEXT,
          px: size.launchInputField.px,
          py: size.launchInputField.py,
          minHeight: size.launchInputField.minHeight,
        },
      }}
      sx={{
        width: '100%',
        '.MuiInputBase-input': { color: Colors.TEXT },
      }}
    />
  );
};

export default LaunchInput;