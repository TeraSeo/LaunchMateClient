import { Box } from "@mui/material";
import DashboardStats from "../cards/DashboardStats";
import DashboardTitleText from "../texts/DashboardTitleText";
import DashboardWelcomeText from "../texts/DashboardWelcomeText";

interface DashboardTopbarProps {
    username: string;
    totalIdea: number;
    activeProjectCnt: number;
    downloadCnt: number;
}

const DashboardTopbar: React.FC<DashboardTopbarProps> = ({ username, totalIdea, activeProjectCnt, downloadCnt }) => {
    const summaryStats = [
        { label: 'Total Ideas', value: totalIdea },
        { label: 'Ongoing Projects', value: activeProjectCnt },
        { label: 'Downloaded PDFs', value: downloadCnt },
        // { label: 'Premium Uses Left', value: 2 }
    ];

    return (
        <>
            <DashboardTitleText />
            <Box mb={5}>
                <DashboardWelcomeText username={username} /> 
                <DashboardStats stats={summaryStats} />
            </Box>
        </>
    );
}

export default DashboardTopbar;