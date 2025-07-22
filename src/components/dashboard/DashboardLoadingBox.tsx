import { Box, Grid, Container, Typography, Paper, Skeleton } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InsightsIcon from '@mui/icons-material/Insights';
import FolderIcon from '@mui/icons-material/Folder';
import DownloadIcon from '@mui/icons-material/Download';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Colors } from '@/constants/Color';

const DashboardLoadingBox: React.FC = () => {
    return (
        <Box sx={{ 
            background: Colors.GRADIENT_PRIMARY, 
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden'
            }}>
            <Box
                sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.03,
                background: `
                    radial-gradient(circle at 20% 50%, ${Colors.SECONDARY} 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, ${Colors.PRIMARY} 0%, transparent 50%),
                    radial-gradient(circle at 40% 80%, ${Colors.ACCENT_DARK} 0%, transparent 50%)
                `,
                animation: 'gradientShift 8s ease-in-out infinite',
                '@keyframes gradientShift': {
                    '0%, 100%': { transform: 'translateX(0%) rotate(0deg)' },
                    '50%': { transform: 'translateX(5%) rotate(2deg)' }
                }
                }}
            />

            <Container maxWidth="lg">
                <Box sx={{ pt: 10, pb: 6, minHeight: '100vh' }}>
                
                <Box sx={{ mb: 4, textAlign: 'center' }}>
                    <Box
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 2,
                        p: 2,
                        borderRadius: 3,
                        background: `${Colors.BACKGROUND}95`,
                        backdropFilter: 'blur(20px)',
                        border: `1px solid ${Colors.SECONDARY}15`,
                        animation: 'fadeInScale 0.8s ease-out',
                        '@keyframes fadeInScale': {
                        '0%': { opacity: 0, transform: 'scale(0.9)' },
                        '100%': { opacity: 1, transform: 'scale(1)' }
                        }
                    }}
                    >
                    <BarChartIcon 
                        sx={{ 
                        fontSize: 28, 
                        color: Colors.SECONDARY,
                        animation: 'pulse 2s ease-in-out infinite',
                        '@keyframes pulse': {
                            '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                            '50%': { opacity: 0.7, transform: 'scale(1.1)' }
                        }
                        }} 
                    />
                    <Typography
                        variant="h5"
                        sx={{
                        fontWeight: 700,
                        color: Colors.SECONDARY_DARK,
                        fontSize: { xs: '1.3rem', sm: '1.5rem' }
                        }}
                    >
                        Loading Dashboard
                    </Typography>
                    </Box>
                </Box>

                <Grid container spacing={3} sx={{ mb: 4 }}>
                    {[
                    { icon: <TrendingUpIcon />, label: 'Total Ideas', delay: '0.2s' },
                    { icon: <FolderIcon />, label: 'Active Projects', delay: '0.4s' },
                    { icon: <DownloadIcon />, label: 'Downloads', delay: '0.6s' },
                    { icon: <InsightsIcon />, label: 'Analytics', delay: '0.8s' }
                    ].map((item, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <Paper
                        sx={{
                            p: 3,
                            borderRadius: 3,
                            background: `${Colors.BACKGROUND}90`,
                            backdropFilter: 'blur(20px)',
                            border: `1px solid ${Colors.SECONDARY}10`,
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            animation: `slideInUp 0.8s ease-out ${item.delay} both`,
                            '@keyframes slideInUp': {
                            '0%': { opacity: 0, transform: 'translateY(30px)' },
                            '100%': { opacity: 1, transform: 'translateY(0px)' }
                            },
                            '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            background: `linear-gradient(90deg, transparent, ${Colors.SECONDARY}15, transparent)`,
                            animation: `shimmer 2s infinite ${item.delay}`,
                            '@keyframes shimmer': {
                                '0%': { left: '-100%' },
                                '100%': { left: '100%' }
                            }
                            }
                        }}
                        >
                        <Box sx={{ color: Colors.SECONDARY, mb: 2, fontSize: 32 }}>
                            {item.icon}
                        </Box>
                        <Skeleton 
                            variant="text" 
                            width={80} 
                            height={32}
                            sx={{ 
                            mx: 'auto', 
                            mb: 1,
                            bgcolor: `${Colors.SECONDARY}15`,
                            borderRadius: 2
                            }} 
                        />
                        <Typography variant="body2" sx={{ color: Colors.TEXT_SECONDARY, fontSize: '0.9rem' }}>
                            {item.label}
                        </Typography>
                        </Paper>
                    </Grid>
                    ))}
                </Grid>

                <Grid container spacing={3} alignItems="flex-start">
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Box sx={{ 
                            animation: 'slideInLeft 0.8s ease-out 1s both',
                            '@keyframes slideInLeft': {
                            '0%': { opacity: 0, transform: 'translateX(-30px)' },
                            '100%': { opacity: 1, transform: 'translateX(0px)' }
                            }
                        }}>
                            {/* Large chart placeholder */}
                            <Paper
                            sx={{
                                p: 4,
                                borderRadius: 4,
                                background: `${Colors.BACKGROUND}90`,
                                backdropFilter: 'blur(20px)',
                                border: `1px solid ${Colors.SECONDARY}10`,
                                mb: 3,
                                position: 'relative',
                                overflow: 'hidden',
                                minHeight: 300
                            }}
                            >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                <Skeleton 
                                variant="circular" 
                                width={40} 
                                height={40}
                                sx={{ bgcolor: `${Colors.PRIMARY}20` }}
                                />
                                <Box>
                                <Skeleton 
                                    variant="text" 
                                    width={200} 
                                    height={24}
                                    sx={{ bgcolor: `${Colors.SECONDARY}15`, mb: 1 }}
                                />
                                <Skeleton 
                                    variant="text" 
                                    width={150} 
                                    height={18}
                                    sx={{ bgcolor: `${Colors.TEXT_SECONDARY}20` }}
                                />
                                </Box>
                            </Box>
                            
                            {/* Animated chart bars */}
                            <Box sx={{ display: 'flex', alignItems: 'end', gap: 2, height: 200, px: 2 }}>
                                {[60, 80, 45, 90, 70, 55, 85].map((height, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                    flex: 1,
                                    height: `${height}%`,
                                    background: Colors.GRADIENT_SECONDARY,
                                    borderRadius: '4px 4px 0 0',
                                    opacity: 0.7,
                                    animation: `growUp 1.5s ease-out ${1.2 + index * 0.1}s both`,
                                    '@keyframes growUp': {
                                        '0%': { height: '0%', opacity: 0 },
                                        '100%': { height: `${height}%`, opacity: 0.7 }
                                    }
                                    }}
                                />
                                ))}
                            </Box>
                            </Paper>

                            {/* Secondary content cards */}
                            <Grid container spacing={3}>
                            {[1, 2].map((item) => (
                                <Grid size={{ xs: 12, sm: 6 }} key={item}>
                                <Paper
                                    sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    background: `${Colors.BACKGROUND}85`,
                                    backdropFilter: 'blur(15px)',
                                    border: `1px solid ${Colors.SECONDARY}08`,
                                    minHeight: 150,
                                    animation: `fadeInUp 0.8s ease-out ${1.4 + item * 0.2}s both`,
                                    '@keyframes fadeInUp': {
                                        '0%': { opacity: 0, transform: 'translateY(20px)' },
                                        '100%': { opacity: 1, transform: 'translateY(0px)' }
                                    }
                                    }}
                                >
                                    <Skeleton 
                                    variant="text" 
                                    width="70%" 
                                    height={24}
                                    sx={{ bgcolor: `${Colors.SECONDARY}15`, mb: 2 }}
                                    />
                                    <Skeleton 
                                    variant="rectangular" 
                                    width="100%" 
                                    height={80}
                                    sx={{ bgcolor: `${Colors.PRIMARY}10`, borderRadius: 2 }}
                                    />
                                </Paper>
                                </Grid>
                            ))}
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ 
                            animation: 'slideInRight 0.8s ease-out 1.2s both',
                            '@keyframes slideInRight': {
                            '0%': { opacity: 0, transform: 'translateX(30px)' },
                            '100%': { opacity: 1, transform: 'translateX(0px)' }
                            }
                        }}>
                            {[1, 2, 3].map((item) => (
                            <Paper
                                key={item}
                                sx={{
                                p: 3,
                                borderRadius: 3,
                                background: `${Colors.BACKGROUND}85`,
                                backdropFilter: 'blur(15px)',
                                border: `1px solid ${Colors.SECONDARY}08`,
                                mb: 3,
                                minHeight: 120,
                                animation: `slideInFade 0.6s ease-out ${1.4 + item * 0.15}s both`,
                                '@keyframes slideInFade': {
                                    '0%': { opacity: 0, transform: 'translateX(20px)' },
                                    '100%': { opacity: 1, transform: 'translateX(0px)' }
                                }
                                }}
                            >
                                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                                <Skeleton 
                                    variant="circular" 
                                    width={30} 
                                    height={30}
                                    sx={{ bgcolor: `${Colors.ACCENT_DARK}20` }}
                                />
                                <Skeleton 
                                    variant="text" 
                                    width="60%" 
                                    height={20}
                                    sx={{ bgcolor: `${Colors.SECONDARY}15` }}
                                />
                                </Box>
                                <Skeleton 
                                variant="text" 
                                width="100%" 
                                height={16}
                                sx={{ bgcolor: `${Colors.TEXT_SECONDARY}15`, mb: 1 }}
                                />
                                <Skeleton 
                                variant="text" 
                                width="80%" 
                                height={16}
                                sx={{ bgcolor: `${Colors.TEXT_SECONDARY}15` }}
                                />
                            </Paper>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}
                    >
                    <Box
                        sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: Colors.SECONDARY,
                        animation: 'pulse 1s infinite'
                        }}
                    />
                        <Typography
                            variant="body2"
                            sx={{
                            color: Colors.TEXT,
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            }}
                        >
                            Preparing your workspace...
                        </Typography>
                    </Box>
                </Box>
            </Container>
            </Box>
    );
}

export default DashboardLoadingBox;