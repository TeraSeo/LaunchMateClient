"use client";

import { navItems, loggedInNavItems } from "@/constants/HomeData";
import { Drawer, Box, Typography, IconButton, ListItem, ListItemText, Button, List, Divider } from "@mui/material";
import { Close } from '@mui/icons-material';
import { fontSize } from '@/constants/FontSize';
import { useRouter } from "next/navigation";

interface HeaderDrawerProps {
    mobileOpen: boolean;
    handleDrawerToggle: () => void;
    isLoggedIn: boolean;
}

const HeaderDrawer: React.FC<HeaderDrawerProps> = ({ mobileOpen, handleDrawerToggle, isLoggedIn }) => {
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
        <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
                '& .MuiDrawer-paper': {
                    width: { xs: 240, sm: 280 },
                    background: 'rgba(18, 18, 18, 0.95)',
                    backdropFilter: 'blur(20px)',
                },
            }}
        >
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography 
                    variant="h6"
                    sx={{ fontSize: fontSize.nav.title }}
                >
                    Menu
                </Typography>
                <IconButton onClick={handleDrawerToggle}>
                    <Close />
                </IconButton>
            </Box>
            <Divider />
            <List>
                {headerNavItems.map((item) => (
                    <ListItem 
                        key={item.text} 
                        component="a" 
                        onClick={() => {
                            handleNavClick(item.href);
                            handleDrawerToggle();
                        }}
                        >
                        <ListItemText 
                            primary={item.text} 
                            sx={{ 
                                '& .MuiListItemText-primary': {
                                    fontSize: fontSize.nav.menu
                                }
                            }}
                        />
                    </ListItem>
                ))}
                <ListItem>
                    <Button 
                        variant="contained" 
                        fullWidth
                        sx={{ fontSize: fontSize.button.medium }}
                        onClick={() => {
                            handleDrawerToggle();
                            router.push(isLoggedIn ? "/launch" : "/login");
                        }}
                    >
                        {isLoggedIn ? "Generate" : "Get Started"}
                    </Button>
                </ListItem>
            </List>
        </Drawer>
    );
}

export default HeaderDrawer;