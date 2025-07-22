import { Colors } from "@/constants/Color";
import { Box, Stack, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const ChatTitleText: React.FC = () => {
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1.5}>
            <Box
                sx={{
                background: Colors.BACKGROUND_LIGHT,
                borderRadius: 2,
                px: { xs: 1, sm: 1.5, md: 2 },
                py: { xs: 0.5, sm: 0.8, md: 1 },
                boxShadow: Colors.SHADOW_LIGHT,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                border: `2px solid ${Colors.SECONDARY}`,
                }}
            >
                <ChatBubbleOutlineIcon sx={{ color: Colors.SECONDARY, fontSize: { xs: 18, sm: 22, md: 26 } }} />
                <Typography
                variant="h5"
                fontWeight={800}
                color={Colors.SECONDARY}
                sx={{
                    fontSize: { xs: '0.98rem', sm: '1.12rem', md: '1.22rem' },
                    letterSpacing: '-0.5px',
                }}
                >
                Startup Idea Chat
                </Typography>
            </Box>
        </Stack>
    );
}

export default ChatTitleText;