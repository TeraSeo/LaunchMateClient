import { StartupIdeaResult, StartupIdeaErrorReason, StartupIdeaRaw } from '@/constants/Form';
import { serverRoute } from '@/constants/Route';
import axios from 'axios';

export const fetchGeneratedIdeaWithAnswers = async (
    answers: string[], previousDescriptions: string[]
  ): Promise<{ success: true; idea: StartupIdeaResult } | { success: false; reason: StartupIdeaErrorReason }> => {
    try {
      const response = await axios.post<{ idea: StartupIdeaRaw }>(
        `${serverRoute}/api/launch/generate-idea-with-answers`,
        { answers, previousDescriptions }
      );
  
      const raw = response.data.idea;
      
      const swotKeys = ['Strengths', 'Weaknesses', 'Opportunities', 'Threats'] as const;
      const normalizedIdea: StartupIdeaResult = {
        startupTitle: raw['Startup Title'] || '',
        description: raw['Description'] || '',
        businessPlanSummary: raw['Business Plan Summary'] || '',
        marketAnalysis: raw['Market Analysis'] || '',
        competitorAnalysis: raw['Competitor Analysis'] || '',
        revenueModel: raw['Revenue Model'] || '',
        swotSnapshot:
          swotKeys
          .map((k) => `${k}: ${raw[k as keyof StartupIdeaRaw] || ''}`)
          .join('\n'),
      };
  
      return { success: true, idea: normalizedIdea };
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          return { success: false, reason: 'validation' };
        }
        return { success: false, reason: 'server' };
      }
      return { success: false, reason: 'network' };
    }
};

export const fetchGeneratedIdeaWitIdeaNAnswers = async (
  answers: string[], baseIdea: string
): Promise<{ success: true; idea: StartupIdeaResult } | { success: false; reason: StartupIdeaErrorReason }> => {
  try {
    const response = await axios.post<{ idea: StartupIdeaRaw }>(
      `${serverRoute}/api/launch/generate-idea-with-answers-n-base-idea`,
      { answers, baseIdea }
    );

    const raw = response.data.idea;

    const swotKeys = ['Strengths', 'Weaknesses', 'Opportunities', 'Threats'] as const;
    const normalizedIdea: StartupIdeaResult = {
      startupTitle: raw['Startup Title'] || '',
      description: raw['Description'] || '',
      businessPlanSummary: raw['Business Plan Summary'] || '',
      marketAnalysis: raw['Market Analysis'] || '',
      competitorAnalysis: raw['Competitor Analysis'] || '',
      revenueModel: raw['Revenue Model'] || '',
      swotSnapshot:
        swotKeys
        .map((k) => `${k}: ${raw[k as keyof StartupIdeaRaw] || ''}`)
        .join('\n'),
    };

    return { success: true, idea: normalizedIdea };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        return { success: false, reason: 'validation' };
      }
      return { success: false, reason: 'server' };
    }
    return { success: false, reason: 'network' };
  }
};

export const fetchGeneratedDetailedIdea = async (
  idea: string
): Promise<{ success: true; idea: StartupIdeaResult } | { success: false; reason: StartupIdeaErrorReason }> => {
  try {
    const response = await axios.post<{ detailedIdea: StartupIdeaRaw }>(
      `${serverRoute}/api/launch/generate-detailed-idea`,
      { idea }
    );

    const raw = response.data.detailedIdea;

    const swotKeys = ['Strengths', 'Weaknesses', 'Opportunities', 'Threats'] as const;
    const normalizedIdea: StartupIdeaResult = {
      startupTitle: raw['Startup Title'] || '',
      description: raw['Description'] || '',
      businessPlanSummary: raw['Business Plan Summary'] || '',
      marketAnalysis: raw['Market Analysis'] || '',
      competitorAnalysis: raw['Competitor Analysis'] || '',
      revenueModel: raw['Revenue Model'] || '',
      swotSnapshot:
        swotKeys
        .map((k) => `${k}: ${raw[k as keyof StartupIdeaRaw] || ''}`)
        .join('\n'),
    };

    return { success: true, idea: normalizedIdea };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        return { success: false, reason: 'validation' };
      }
      return { success: false, reason: 'server' };
    }
    return { success: false, reason: 'network' };
  }
};