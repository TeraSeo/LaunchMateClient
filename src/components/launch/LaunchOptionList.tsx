import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Colors } from "@/constants/Color";
import { fontSize } from "@/constants/FontSize";

interface LaunchOptionListProps {
  filteredOptions: string[];
  selected: string | null;
  handleOptionClick: (option: string) => void;
}

const LaunchOptionList: React.FC<LaunchOptionListProps> = ({
  filteredOptions,
  selected,
  handleOptionClick,
}) => {
  return (
    <List sx={{ maxHeight: 400, overflowY: 'auto', background: 'transparent', p: 0 }}>
      {filteredOptions.map(option => (
        <ListItem key={option} disablePadding>
          <ListItemButton
            selected={selected === option}
            onClick={() => handleOptionClick(option)}
            sx={{
              borderRadius: 1,
              px: 2,
              py: 1.2,
              mb: 0.5,
              color: Colors.TEXT,
              background: selected === option ? Colors.SECONDARY_LIGHT : 'transparent',
              '&:hover': {
                background: Colors.SECONDARY_LIGHT,
                color: '#fff',
              },
              transition: 'background 0.2s',
            }}
          >
            <ListItemText
              primary={option}
              primaryTypographyProps={{
                sx: {
                  fontSize: fontSize.launchOption,
                  fontWeight: 400,
                },
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default LaunchOptionList;