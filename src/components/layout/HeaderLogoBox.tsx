"use client";

import { fontSize } from "@/constants/FontSize";
import { Avatar, Box, Typography } from "@mui/material";
import Image from 'next/image';
import { useRouter } from "next/navigation";

const HeaderLogoBox: React.FC = () => {
    const router = useRouter();

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} onClick={() => router.push("/")}>
            <Avatar
                sx={{
                background: 'linear-gradient(135deg, #2979FF 0%, #5B9AFF 100%)',
                }}
            >
                <Image
                    src="/images/logo.png"
                    alt="LaunchMate Logo"
                    width={24}
                    height={24}
                    style={{
                        borderRadius: '4px',
                        border: '1px solid #ccc'
                    }}
                />
            </Avatar>
            <Typography
                variant="h6" 
                component="div" 
                sx={{ 
                fontWeight: 600,
                fontSize: fontSize.nav.title
                }}
            >
                LaunchMate
            </Typography>
        </Box>
    );
}

export default HeaderLogoBox;