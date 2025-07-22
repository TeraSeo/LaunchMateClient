import { Typography } from '@mui/material';
import { fontSize } from '@/constants/FontSize';
import { Colors } from '@/constants/Color';

interface LaunchTitleProps {
  label: string;
  subtitle: string;
}

const LaunchTitleText: React.FC<LaunchTitleProps> = ({ label, subtitle }) => {
  return (
    <>
      <Typography sx={{ fontWeight: 700, mb: 1.5, color: Colors.TEXT, fontSize: fontSize.launchTitle }}>
        {label}
      </Typography>
      <Typography sx={{ mb: 4, color: Colors.TEXT_SECONDARY, fontSize: fontSize.launchSubtitle }}>
        {subtitle}
      </Typography>
    </>
  );
}

export default LaunchTitleText;