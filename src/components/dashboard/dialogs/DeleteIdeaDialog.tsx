import React from "react";
import { Colors } from "@/constants/Color";
import { 
    Button, 
    Dialog, 
    DialogContent, 
    Box, 
    Typography, 
    Stack, 
    Fade,
    Grow,
    IconButton
} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CloseIcon from '@mui/icons-material/Close';

interface DeleteIdeaDialogProps {
    openDialog: boolean;
    isDeleting: boolean;
    handleCloseDialog: () => void;
    deleteIdeaById: () => void;
}

const DeleteIdeaDialog: React.FC<DeleteIdeaDialogProps> = ({ openDialog, isDeleting, handleCloseDialog, deleteIdeaById }) => {
    return (
        <Dialog
            open={openDialog}
            onClose={!isDeleting ? handleCloseDialog : undefined}
            maxWidth="sm"
            fullWidth
            TransitionComponent={Grow}
            TransitionProps={{
                timeout: 400
            }}
            PaperProps={{
                sx: {
                    borderRadius: 4,
                    background: `linear-gradient(145deg, ${Colors.BACKGROUND} 0%, ${Colors.BACKGROUND_LIGHT} 100%)`,
                    border: `1px solid ${Colors.SECONDARY}15`,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                    overflow: 'visible',
                    position: 'relative'
                }
            }}
            BackdropProps={{
                sx: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(8px)'
                }
            }}
        >
            {/* Decorative top accent */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: `linear-gradient(90deg, ${Colors.ERROR} 0%, #ff6b6b 100%)`,
                    borderRadius: '16px 16px 0 0'
                }}
            />

            {/* Close button */}
            <IconButton
                onClick={handleCloseDialog}
                disabled={isDeleting}
                sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    color: Colors.TEXT_SECONDARY,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        color: Colors.ERROR,
                        background: `${Colors.ERROR}10`,
                        transform: 'scale(1.1)'
                    }
                }}
            >
                <CloseIcon />
            </IconButton>

            <DialogContent sx={{ p: 0 }}>
                <Box sx={{ p: 4, pt: 5 }}>
                    {/* Icon and warning animation */}
                    <Fade in timeout={600}>
                        <Box sx={{ textAlign: 'center', mb: 3 }}>
                            <Box
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    background: `${Colors.ERROR}15`,
                                    mb: 2,
                                    position: 'relative',
                                    animation: !isDeleting ? 'shake 0.5s ease-in-out infinite alternate' : 'spin 1s linear infinite',
                                    '@keyframes shake': {
                                        '0%': { transform: 'rotate(-3deg)' },
                                        '100%': { transform: 'rotate(3deg)' }
                                    },
                                    '@keyframes spin': {
                                        '0%': { transform: 'rotate(0deg)' },
                                        '100%': { transform: 'rotate(360deg)' }
                                    }
                                }}
                            >
                                {!isDeleting ? (
                                    <WarningAmberIcon 
                                        sx={{ 
                                            fontSize: 40, 
                                            color: Colors.ERROR,
                                            filter: 'drop-shadow(0 2px 8px rgba(211, 47, 47, 0.3))'
                                        }} 
                                    />
                                ) : (
                                    <DeleteOutlineIcon 
                                        sx={{ 
                                            fontSize: 40, 
                                            color: Colors.ERROR
                                        }} 
                                    />
                                )}
                            </Box>
                        </Box>
                    </Fade>

                    {/* Content */}
                    <Fade in timeout={800}>
                        <Box sx={{ textAlign: 'center', mb: 4 }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    color: Colors.TEXT,
                                    mb: 1.5,
                                    fontSize: { xs: '1.3rem', sm: '1.5rem' }
                                }}
                            >
                                {!isDeleting ? 'Delete This Idea?' : 'Deleting Idea...'}
                            </Typography>
                            
                            {!isDeleting ? (
                                <>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: Colors.TEXT_SECONDARY,
                                            lineHeight: 1.6,
                                            mb: 2,
                                            fontSize: '1.05rem'
                                        }}
                                    >
                                        This action cannot be undone. Your idea and all associated data will be permanently removed from your account.
                                    </Typography>
                                    
                                    <Box
                                        sx={{
                                            p: 2.5,
                                            borderRadius: 3,
                                            background: `${Colors.ERROR}08`,
                                            border: `1px solid ${Colors.ERROR}20`,
                                            mb: 1
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: Colors.ERROR,
                                                fontWeight: 600,
                                                fontSize: '0.95rem'
                                            }}
                                        >
                                            ⚠️ Warning: This will permanently delete your startup idea
                                        </Typography>
                                    </Box>
                                </>
                            ) : (
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: Colors.TEXT_SECONDARY,
                                        fontSize: '1.05rem'
                                    }}
                                >
                                    Please wait while we remove your idea...
                                </Typography>
                            )}
                        </Box>
                    </Fade>

                    {/* Action buttons */}
                    {!isDeleting && (
                        <Fade in timeout={1000}>
                            <Stack 
                                direction={{ xs: 'column', sm: 'row' }} 
                                spacing={2} 
                                sx={{ justifyContent: 'center' }}
                            >
                                <Button
                                    variant="outlined"
                                    onClick={handleCloseDialog}
                                    size="large"
                                    sx={{
                                        borderRadius: 3,
                                        py: 1.5,
                                        px: 3,
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        borderColor: Colors.TEXT_SECONDARY,
                                        color: Colors.TEXT_SECONDARY,
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            borderColor: Colors.SECONDARY,
                                            color: Colors.SECONDARY,
                                            background: `${Colors.SECONDARY}08`,
                                            transform: 'translateY(-1px)'
                                        }
                                    }}
                                >
                                    Cancel
                                </Button>
                                
                                <Button
                                    variant="contained"
                                    onClick={deleteIdeaById}
                                    startIcon={<DeleteOutlineIcon />}
                                    size="large"
                                    sx={{
                                        borderRadius: 3,
                                        py: 1.5,
                                        px: 3,
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        background: `linear-gradient(135deg, ${Colors.ERROR} 0%, #d32f2f 100%)`,
                                        boxShadow: '0 4px 16px rgba(211, 47, 47, 0.3)',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            background: `linear-gradient(135deg, #d32f2f 0%, #c62828 100%)`,
                                            boxShadow: '0 6px 20px rgba(211, 47, 47, 0.4)',
                                            transform: 'translateY(-2px)'
                                        }
                                    }}
                                >
                                    Yes, Delete It
                                </Button>
                            </Stack>
                        </Fade>
                    )}

                    {/* Loading state */}
                    {isDeleting && (
                        <Fade in timeout={400}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Box
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                        p: 2,
                                        borderRadius: 3,
                                        background: `${Colors.ERROR}10`,
                                        border: `1px solid ${Colors.ERROR}20`
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 20,
                                            height: 20,
                                            border: `2px solid ${Colors.ERROR}30`,
                                            borderTop: `2px solid ${Colors.ERROR}`,
                                            borderRadius: '50%',
                                            animation: 'spin 1s linear infinite'
                                        }}
                                    />
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: Colors.ERROR,
                                            fontWeight: 600
                                        }}
                                    >
                                        Deleting your idea...
                                    </Typography>
                                </Box>
                            </Box>
                        </Fade>
                    )}
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default DeleteIdeaDialog;