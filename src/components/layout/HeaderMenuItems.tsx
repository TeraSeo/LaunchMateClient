"use client";

import { fontSize } from "@/constants/FontSize";
import { loggedInNavItems, navItems } from "@/constants/HomeData";
import { Box, Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from 'next/navigation';
import { Menu as MenuIcon } from '@mui/icons-material';

interface HeaderMenuItemsProps {
    isLoggedIn: boolean;
    handleDrawerToggle: () => void;
}

const HeaderMenuItems: React.FC<HeaderMenuItemsProps> = ({ isLoggedIn, handleDrawerToggle }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const router = useRouter();

    const headerNavItems = isLoggedIn ? loggedInNavItems : navItems;

    const handleNavClick = async (href: string) => {
        if (href === '/logout') {
            // 1. Remove token cookie
            document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
            localStorage.setItem('token', '');
            // 2. Redirect to home
            await router.push('/');
            setTimeout(() => {
                location.reload();
            }, 1000);
        } else {
            router.push(href);
        }
    };

    return (
        <>
            {isMobile ? (
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    >
                    <MenuIcon />
                </IconButton>
            ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2, md: 3 } }}>
                {headerNavItems.map((item) => (
                    <Button 
                        key={item.text} 
                        color="inherit" 
                        sx={{ fontSize: fontSize.nav.menu }}
                        onClick={() => handleNavClick(item.href)}
                        >
                        {item.text}
                    </Button>
                ))}
                {isLoggedIn ? (
                    <Button
                        variant="contained"
                        size="medium"
                        sx={{ fontSize: fontSize.button.medium }}
                        onClick={() => router.push("/launch")}
                    >
                        Generate
                    </Button>
                    ) : (
                    <Button
                        variant="contained"
                        size="medium"
                        sx={{ fontSize: fontSize.button.medium }}
                        onClick={() => router.push("/login")}
                    >
                        Get Started
                    </Button>
                )}
            </Box>
            )}
        </>
    );
}

export default HeaderMenuItems;