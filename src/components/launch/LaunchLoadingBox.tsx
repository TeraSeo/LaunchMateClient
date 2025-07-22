import { Colors } from "@/constants/Color";
import { Box, Fade, Typography, Stack } from "@mui/material";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const LaunchLoadingBox: React.FC = () => {
    return (
        <Box 
          sx={{ 
            minHeight: '100vh', 
            pt: { xs: 8, sm: 10, md: 12 },
            pb: { xs: 4, sm: 6, md: 8 },
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background: `linear-gradient(120deg, ${Colors.BACKGROUND_LIGHT} 70%, ${Colors.SECONDARY}10 100%)`,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: 100,
              height: 100,
              borderRadius: '50%',
              background: `${Colors.SECONDARY}15`,
              animation: 'float 6s ease-in-out infinite',
              '@keyframes float': {
                '0%, 100%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-20px)' }
              }
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '60%',
              right: '15%',
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: `${Colors.PRIMARY}12`,
              animation: 'float 4s ease-in-out infinite 2s',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '20%',
              left: '20%',
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: `${Colors.ACCENT_DARK}08`,
              animation: 'float 5s ease-in-out infinite 1s',
            }}
          />
  
          <Fade in timeout={800}>
            <Box sx={{ textAlign: 'center', zIndex: 2 }}>
              <Box
                sx={{
                  position: 'relative',
                  mb: 4,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    width: 120,
                    height: 120,
                    border: `3px solid ${Colors.SECONDARY}20`,
                    borderTop: `3px solid ${Colors.SECONDARY}`,
                    borderRadius: '50%',
                    animation: 'spin 2s linear infinite',
                    '@keyframes spin': {
                      '0%': { transform: 'rotate(0deg)' },
                      '100%': { transform: 'rotate(360deg)' }
                    }
                  }}
                />
                
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: Colors.GRADIENT_SECONDARY,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'pulse 1.5s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { transform: 'scale(1)', opacity: 1 },
                      '50%': { transform: 'scale(1.1)', opacity: 0.8 }
                    }
                  }}
                >
                  <EmojiObjectsIcon sx={{ fontSize: 32, color: '#fff' }} />
                </Box>
              </Box>
  
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  background: Colors.GRADIENT_SECONDARY,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                  mb: 2,
                  animation: 'fadeInUp 0.8s ease-out',
                  '@keyframes fadeInUp': {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0px)' }
                  }
                }}
              >
                Creating Your Startup
              </Typography>
  
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: Colors.TEXT_SECONDARY,
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    fontWeight: 500,
                    mb: 3,
                    animation: 'fadeInUp 0.8s ease-out 0.2s both'
                  }}
                >
                  AI is analyzing and structuring your idea...
                </Typography>
  
                <Stack spacing={2} sx={{ maxWidth: 400, mx: 'auto' }}>
                  {[
                    { label: 'Analyzing market potential', delay: '0.4s' },
                    { label: 'Generating business model', delay: '0.6s' },
                    { label: 'Creating SWOT analysis', delay: '0.8s' },
                    { label: 'Finalizing details', delay: '1s' }
                  ].map((step, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2,
                        borderRadius: 2,
                        background: `${Colors.BACKGROUND}80`,
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${Colors.SECONDARY}20`,
                        animation: `fadeInUp 0.8s ease-out ${step.delay} both`,
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: Colors.SECONDARY,
                          animation: 'bounce 1s infinite',
                          animationDelay: step.delay,
                          '@keyframes bounce': {
                            '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
                            '40%': { transform: 'translateY(-8px)' },
                            '60%': { transform: 'translateY(-4px)' }
                          }
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: Colors.TEXT,
                          fontSize: '0.95rem',
                          fontWeight: 500
                        }}
                      >
                        {step.label}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
  
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  background: `${Colors.SECONDARY}08`,
                  border: `1px solid ${Colors.SECONDARY}15`,
                  maxWidth: 500,
                  mx: 'auto',
                  animation: 'fadeInUp 0.8s ease-out 1.2s both'
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: Colors.TEXT_SECONDARY,
                    fontSize: '0.9rem',
                    fontStyle: 'italic',
                    lineHeight: 1.6
                  }}
                >
                  💡 Did you know? The best startups solve problems that founders personally experienced. 
                  We're making sure your idea has that authentic touch!
                </Typography>
              </Box>
            </Box>
          </Fade>
        </Box>
    );
}

export default LaunchLoadingBox;