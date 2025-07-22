import { StartupIdeaResult, StartupIdeaErrorReason } from '@/constants/Form';
import axios from 'axios';

export const fetchGeneratedIdeaWithAnswers = async (
    answers: string[], previousDescriptions: string[]
  ): Promise<{ success: true; idea: StartupIdeaResult } | { success: false; reason: StartupIdeaErrorReason }> => {
    try {
      const response = await axios.post<{ idea: any }>(
        'http://localhost:8080/api/launch/generate-idea-with-answers',
        { answers, previousDescriptions }
      );
  
      const raw = response.data.idea;
  
      const normalizedIdea: StartupIdeaResult = {
        startupTitle: raw['Startup Title'] || '',
        description: raw['Description'] || '',
        businessPlanSummary: raw['Business Plan Summary'] || '',
        marketAnalysis: raw['Market Analysis'] || '',
        competitorAnalysis: raw['Competitor Analysis'] || '',
        revenueModel: raw['Revenue Model'] || '',
        swotSnapshot:
          ['Strengths', 'Weaknesses', 'Opportunities', 'Threats']
            .map((k) => `${k}: ${raw[k] || ''}`)
            .join('\n'),
      };
  
      return { success: true, idea: normalizedIdea };
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 400) {
          return { success: false, reason: 'validation' };
        }
        return { success: false, reason: 'server' };
      } else {
        return { success: false, reason: 'network' };
      }
    }
};

export const fetchGeneratedIdeaWitIdeaNAnswers = async (
  answers: string[], baseIdea: string
): Promise<{ success: true; idea: StartupIdeaResult } | { success: false; reason: StartupIdeaErrorReason }> => {
  try {
    const response = await axios.post<{ idea: any }>(
      'http://localhost:8080/api/launch/generate-idea-with-answers-n-base-idea',
      { answers, baseIdea }
    );

    const raw = response.data.idea;

    const normalizedIdea: StartupIdeaResult = {
      startupTitle: raw['Startup Title'] || '',
      description: raw['Description'] || '',
      businessPlanSummary: raw['Business Plan Summary'] || '',
      marketAnalysis: raw['Market Analysis'] || '',
      competitorAnalysis: raw['Competitor Analysis'] || '',
      revenueModel: raw['Revenue Model'] || '',
      swotSnapshot:
        ['Strengths', 'Weaknesses', 'Opportunities', 'Threats']
          .map((k) => `${k}: ${raw[k] || ''}`)
          .join('\n'),
    };

    return { success: true, idea: normalizedIdea };
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 400) {
        return { success: false, reason: 'validation' };
      }
      return { success: false, reason: 'server' };
    } else {
      return { success: false, reason: 'network' };
    }
  }
};

export const fetchGeneratedDetailedIdea = async (
  idea: string
): Promise<{ success: true; idea: StartupIdeaResult } | { success: false; reason: StartupIdeaErrorReason }> => {
  try {
    const response = await axios.post<{ detailedIdea: any }>(
      'http://localhost:8080/api/launch/generate-detailed-idea',
      { idea }
    );

    const raw = response.data.detailedIdea;

    const normalizedIdea: StartupIdeaResult = {
      startupTitle: raw['Startup Title'] || '',
      description: raw['Description'] || '',
      businessPlanSummary: raw['Business Plan Summary'] || '',
      marketAnalysis: raw['Market Analysis'] || '',
      competitorAnalysis: raw['Competitor Analysis'] || '',
      revenueModel: raw['Revenue Model'] || '',
      swotSnapshot:
        ['Strengths', 'Weaknesses', 'Opportunities', 'Threats']
          .map((k) => `${k}: ${raw[k] || ''}`)
          .join('\n'),
    };

    return { success: true, idea: normalizedIdea };
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 400) {
        return { success: false, reason: 'validation' };
      }
      return { success: false, reason: 'server' };
    } else {
      return { success: false, reason: 'network' };
    }
  }
};