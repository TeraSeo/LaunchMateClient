"use client";

import { fontSize } from "@/constants/FontSize";
import { Button } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deleteSpecificIdea } from "@/services/LaunchService";
import { useState } from "react";
import DeleteIdeaDialog from "../dialogs/DeleteIdeaDialog";

interface IdeaDeleteButtonProps {
    ideaId: number;
}

const IdeaDeleteButton: React.FC<IdeaDeleteButtonProps> = ({ ideaId }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const deleteIdeaById = async () => {
        setIsDeleting(true);
        try {
            const response = await deleteSpecificIdea(ideaId);
            if (response.success) {
                // Success animation delay before reload
                setTimeout(() => {
                    window.location.reload();
                }, 800);
            }
        } catch (_) {
            setIsDeleting(false);
        }
    };

    return (
        <>
            <Button
                size="small"
                variant="outlined"
                onClick={handleOpenDialog}
                startIcon={<DeleteOutlineIcon />}
                color="error"
                sx={{
                    borderRadius: 2,
                    fontSize: fontSize.dashboard.button,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        transform: 'translateY(-1px)',
                        boxShadow: '0 4px 12px rgba(211, 47, 47, 0.3)'
                    }
                }}
            >
                Delete
            </Button>

            <DeleteIdeaDialog openDialog={openDialog} isDeleting={isDeleting} handleCloseDialog={handleCloseDialog} deleteIdeaById={deleteIdeaById} />
        </>
    );
};

export default IdeaDeleteButton;