import { Colors } from "@/constants/Color";
import { Paper, Stack, Divider } from "@mui/material";
import DetailedIdeaTitleText from "../texts/DetailedIdeaTitleText";
import DetailedIdeaDescriptionText from "../texts/DetailedIdeaDescriptionText";
import DetailedIdeaPlanSummaryText from "../texts/DetailedIdeaPlanSummaryText";
import DetailedIdeaMarketText from "../texts/DetailedIdeaMarketText";
import DetailedIdeaCompetitorText from "../texts/DetailedIdeaCompetitorText";
import DetailedIdeaRevenueText from "../texts/DetailedIdeaRevenueText";
import DetailedIdeaSwotsText from "../texts/DetailedIdeaSwotsText";

interface DetailedIdeaMainSectionCardProps {
    startupTitle: string;
    description: string;
    summary: string;
    market: string;
    competitor: string;
    revenue: string;
    swotSnapshot: string;
}

const DetailedIdeaMainSectionCard: React.FC<DetailedIdeaMainSectionCardProps> = ({ startupTitle, description, summary, market, competitor, revenue, swotSnapshot }) => {
    const swotValues = (swotSnapshot || "")
        .split('\n')
        .map((line: string) => line.replace(/^[A-Za-z ]+:/, '').trim());

    return (
        <Paper
            elevation={0}
            sx={{
            borderRadius: 5,
            px: { xs: 3, sm: 5, md: 7 },
            py: { xs: 3, sm: 4, md: 5 },
            mb: 6,
            border: `1.5px solid ${Colors.SECONDARY}22`
            }}
        >
            {startupTitle && (
                <DetailedIdeaTitleText startupTitle={startupTitle} />
            )}

            {description && (
                <DetailedIdeaDescriptionText description={description} />
            )}

            <Divider sx={{ my: 3, borderColor: Colors.SECONDARY, opacity: 0.2 }} />

            <Stack spacing={3} sx={{ mb: 3 }}>
            {summary && (
                <DetailedIdeaPlanSummaryText summary={summary} />
            )}
            {market && (
                <DetailedIdeaMarketText market={market} />
            )}
            {competitor && (
                <DetailedIdeaCompetitorText competitor={competitor} />
            )}
            {revenue && (
                <DetailedIdeaRevenueText revenue={revenue} />
            )}
            </Stack>

            {(swotValues.some(Boolean)) && (
                <DetailedIdeaSwotsText swotSnapshot={swotSnapshot} />
            )}
        </Paper>
    );
}

export default DetailedIdeaMainSectionCard;