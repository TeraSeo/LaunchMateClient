export type CreateUserForm = {
    username: string;
    email: string;
    password: string;
};

export type CreateUserResult = {
    success: boolean;
    reason?: 'duplicate' | 'server' | 'network';
};

export type ValidateUserForm = {
    email: string;
    password: string;
};

export type ValidateUserResult = {
    success: boolean;
    token?: string;
};

export type VerifyOtpForm = {
    email: string;
    code: string;
};

export type VerifyOtpResult = {
    success: boolean;
    token?: string;
};

export interface StartupIdeaResult {
    startupTitle: string;
    description: string;
    businessPlanSummary: string;
    marketAnalysis: string;
    competitorAnalysis: string;
    revenueModel: string;
    swotSnapshot: string;
}

export type StartupIdeaErrorReason = 'validation' | 'server' | 'network';

export const formatStartupIdeaResult = (idea: StartupIdeaResult): string => {
    if (idea.description === "⚠️ The provided idea does not align with the user preferences.") {
        return '⚠️ The provided idea does not align with the user preferences.';
    }
    return `
        🚀 Startup Title:
        ${idea.startupTitle}
        
        📝 Description:
        ${idea.description}
        
        📋 Business Plan Summary:
        ${idea.businessPlanSummary}
        
        📊 Market Analysis:
        ${idea.marketAnalysis}
        
        ⚔️ Competitor Analysis:
        ${idea.competitorAnalysis}
        
        💰 Revenue Model:
        ${idea.revenueModel}
        
        🧠 SWOT Snapshot:
        ${idea.swotSnapshot}
            `.trim();
};

export type CreateIdeaForm = {
    token: string;
    answers: string[];
};
  
export type CreateIdeaResult =
    { success: false; reason: 'duplicate' | 'server' | 'network' }
    | { success: true; ideaId: number };

export type CreateDetailedIdeaForm = {
    id: number,
    detailed: {
      startupTitle: string;
      description: string;
      planSummary: string;
      marketAnalysis: string;
      competitorAnalysis: string;
      revenueModel: string;
      swotSnapshot: string;
    }
};

export type UserStatResult = {
    success: boolean;
    userStat?: {
        username: string;
        totalIdea: number;
        activeProjectCnt: number;
        downloadCnt: number;
        ideaIds: number[];
    };
};

export type SummarizedIdeaResult = {
    success: boolean;
    summarizedIdea?: {
      ideaId: number;
      title: string;
      isCompleted: boolean;
      createdAt: Date;
    };
    reason?: 'duplicate' | 'server' | 'network';
};

export type IdeaAnswersResult = {
    success: boolean;
    ideaAnswers?: string[];
    reason?: 'duplicate' | 'server' | 'network';
};

export type DeletedIdeaResult = {
    success: boolean;
    reason?: 'duplicate' | 'server' | 'network';
};

export type GetIdaeDetailResult = {
    success: boolean;
    detailed?: {
        startupTitle: string;
        description: string;
        businessPlanSummary: string;
        marketAnalysis: string;
        competitorAnalysis: string;
        revenueModel: string;
        swotSnapshot: string;
    },
    reason?: 'server' | 'network';
}