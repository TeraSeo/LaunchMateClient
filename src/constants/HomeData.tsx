import { Description, Analytics, TrackChanges, MonetizationOn, Insights, PictureAsPdf } from '@mui/icons-material';

export const navItems = [
    { text: 'About', href: '/#about' },
    { text: 'Features', href: '/#features' },
    { text: 'Pricing', href: '/#pricing' }
];

export const loggedInNavItems = [
    { text: 'Dashboard', href: '/dashboard' },
    { text: 'Settings', href: '/settings' },      
    { text: 'Logout', href: '/logout' }, 
];

export const features = [
    {
        icon: <Description />,
        title: 'Business Plan Summary',
        description: 'Comprehensive overview of your startup concept with key insights and strategic direction.',
    },
    {
        icon: <Analytics />,
        title: 'Market Analysis',
        description: 'Detailed market research including size, trends, opportunities, and competitive landscape.',
    },
    {
        icon: <TrackChanges />,
        title: 'Competitor Analysis',
        description: 'In-depth analysis of key competitors, their strengths, weaknesses, and market positioning.',
    },
    {
        icon: <MonetizationOn />,
        title: 'Revenue Model',
        description: 'Clear monetization strategy with pricing models, revenue streams, and financial projections.',
    },
    {
        icon: <Insights />,
        title: 'SWOT Snapshot',
        description: 'Strengths, Weaknesses, Opportunities, and Threats related to your startup idea.',
    },
    {
        icon: <PictureAsPdf />,
        title: 'PDF Export',
        description: 'Professional PDF downloads for premium users with customizable branding options.',
    },
];

export const steps = [
    {
        number: 1,
        title: 'Enter Your Idea',
        description: 'Simply input your startup idea keywords and let our AI understand your vision.',
    },
    {
        number: 2,
        title: 'AI Analysis',
        description: 'Our advanced GPT-powered system analyzes markets, competitors, and opportunities.',
    },
    {
        number: 3,
        title: 'Get Your Plan',
        description: 'Receive a comprehensive business plan ready for investors and stakeholders.',
    },
];

export const pricingPlans = [
    {
        title: 'Free',
        price: '$0',
        features: ['Basic business plan generation', 'Market analysis', 'Competitor overview', '3 plans per month'],
        buttonText: 'Get Started Free',
    },
    {
        title: 'Pro',
        price: '$29',
        features: ['Everything in Free', 'PDF export', 'Investor documents', 'Unlimited plans', 'Priority support'],
        buttonText: 'Start Pro Trial',
        featured: true,
    },
    {
        title: 'Enterprise',
        price: 'Custom',
        features: ['Everything in Pro', 'Custom branding', 'API access', 'White-label options', 'Dedicated support'],
        buttonText: 'Contact Sales',
    },
];