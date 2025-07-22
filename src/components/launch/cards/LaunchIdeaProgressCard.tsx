import { Box, Stack, Grid } from '@mui/material';
import { Colors } from '@/constants/Color';
import { steps } from '@/constants/Option';
import Progressbar from "../bars/Progresbar";
import ProgressCircle from "../ProgressCircle";
import ProgressContentText from "../texts/ProgressContentText";
import ProgressOverviewTitleText from "../texts/ProgressOverviewTitleText";

interface LaunchIdeaProgressCardProps {
  answers: string[];
}

const LaunchIdeaProgressCard: React.FC<LaunchIdeaProgressCardProps> = ({ answers }) => {
    
    return (
        <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                position: 'sticky',
                top: 20,
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                p: 3,
                border: `1px solid ${Colors.ACCENT_DARK}`,
                boxShadow: `0 8px 32px rgba(0,0,0,0.1)`,
              }}
            >
              <ProgressOverviewTitleText />
              
              <Stack spacing={{ xs: 1, sm: 1.3, md: 2 }}>
                {steps.map((step, idx) => (
                  <Box
                    key={step.key}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      py: { xs: 0.3, sm: 0.5, md: 0.7 },
                    }}
                  >
                    <ProgressCircle />
                    
                    {/* Content */}
                    <ProgressContentText label={step.label} answer={answers[idx]} />
                  </Box>
                ))}
              </Stack>
              
              <Progressbar percentage={20} />
            </Box>
        </Grid>
    );
}

export default LaunchIdeaProgressCard;