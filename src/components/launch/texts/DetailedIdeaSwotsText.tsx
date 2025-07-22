import { Colors } from '@/constants/Color';
import { Box, Typography, Grid, Divider } from "@mui/material";
import BoltIcon from '@mui/icons-material/Bolt';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

interface DetailedIdeaSwotsTextProps {
    swotSnapshot: string;
}

const swotIcons = [
    (key: string | number) => <BoltIcon key={key} sx={{ color: Colors.SECONDARY }} />,
    (key: string | number) => <WarningAmberIcon key={key} sx={{ color: Colors.ACCENT_DARK }} />,
    (key: string | number) => <EmojiObjectsIcon key={key} sx={{ color: Colors.PRIMARY }} />,
    (key: string | number) => <ReportProblemIcon key={key} sx={{ color: Colors.ERROR }} />,
];


const swotLabels = ["Strengths", "Weaknesses", "Opportunities", "Threats"];

const DetailedIdeaSwotsText: React.FC<DetailedIdeaSwotsTextProps> = ({ swotSnapshot }) => {
    const swotValues = (swotSnapshot || "")
        .split('\n')
        .map((line: string) => line.replace(/^[A-Za-z ]+:/, '').trim());

    return (
        <>
            <Divider sx={{ my: 3, borderColor: Colors.SECONDARY, opacity: 0.2 }} />
            <Grid container spacing={2}>
            {swotLabels.map((label, idx) => (
                <Grid size={{ xs: 12, sm: 6 }} key={label}>
                <Box
                    sx={{
                    background: idx % 2 === 0 ? Colors.BACKGROUND_LIGHT : Colors.BACKGROUND,
                    borderRadius: 3,
                    boxShadow: Colors.SHADOW_LIGHT,
                    p: { xs: 2, sm: 2.5 },
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                    minHeight: 80,
                    }}
                >
                    <Box sx={{ mt: 0.5 }}>{swotIcons[idx](label)}</Box>
                    <Box>
                    <Typography sx={{ color: Colors.SECONDARY, fontWeight: 700, fontSize: '1.05rem', mb: 0.5 }}>
                        {label}
                    </Typography>
                    <Typography sx={{ color: Colors.TEXT, fontSize: '0.98rem', whiteSpace: 'pre-line' }}>
                        {swotValues[idx]}
                    </Typography>
                    </Box>
                </Box>
                </Grid>
            ))}
            </Grid>
        </>
    );
}

export default DetailedIdeaSwotsText;