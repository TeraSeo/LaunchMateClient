import { CreateDetailedIdeaForm, CreateIdeaForm, CreateIdeaResult, DeletedIdeaResult, GetIdaeDetailResult, IdeaAnswersResult, SummarizedIdeaResult } from '@/constants/Form';
import { serverRoute } from '@/constants/Route';
import axios from 'axios';

export const getSpecificSummarizedIdea = async (
  ideaId: number
): Promise<SummarizedIdeaResult> => {
  try {
    const response = await axios.get(
      `${serverRoute}/api/launch/get/specific/summarized/idea`,
      {
        params: { ideaId },
      }
    );

    return {
      success: true,
      summarizedIdea: response.data.summarizedIdea,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 409) {
        return { success: false, reason: 'duplicate' };
      }
      return { success: false, reason: 'server' };
    } else {
      return { success: false, reason: 'network' };
    }
  }
};

export const getIdeaAnswers = async (
  ideaId: number
): Promise<IdeaAnswersResult> => {
  try {
    const response = await axios.get(
      `${serverRoute}/api/launch/get/specific/idea/answers`,
      {
        params: { ideaId },
      }
    );

    return {
      success: true,
      ideaAnswers: response.data.ideaAnswers,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 409) {
        return { success: false, reason: 'duplicate' };
      }
      return { success: false, reason: 'server' };
    } else {
      return { success: false, reason: 'network' };
    }
  }
};

export const getIdeaDetail = async (
  ideaId: number
): Promise<GetIdaeDetailResult> => {
  try {
    const response = await axios.get(
      `${serverRoute}/api/launch/get/detail`,
      {
        params: { ideaId },
      }
    );

    const raw = response.data.ideaDetail;
    const detailedIdea = {
      startupTitle: raw['Startup Title'] || '',
      description: raw['Description'] || '',
      businessPlanSummary: raw['Business Plan Summary'] || '',
      marketAnalysis: raw['Market Analysis'] || '',
      competitorAnalysis: raw['Competitor Analysis'] || '',
      revenueModel: raw['Revenue Model'] || '',
      swotSnapshot: raw['Swot Snapshot'] || ''
    }

    return {
      success: true,
      detailed: detailedIdea,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return { success: false, reason: 'server' };
    } else {
      return { success: false, reason: 'network' };
    }
  }
};

export const createIdea = async (
  form: CreateIdeaForm
): Promise<CreateIdeaResult> => {
  try {
    const response = await axios.post(`${serverRoute}/api/launch/create/idea`, form);
    return { success: true, ideaId: response.data.ideaId };
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 409) {
        return { success: false, reason: 'duplicate' };
      }
      return { success: false, reason: 'server' };
    } else {
      return { success: false, reason: 'network' };
    }
  }
};

export const createDetailedIdea = async (
    form: CreateDetailedIdeaForm
  ): Promise<{ success: boolean;reason?: string }> => {
    try {
      const response = await axios.post(`${serverRoute}/api/launch/create/detailed/idea`, form);
  
      return { success: response.data.isCreated };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return { success: false, reason: 'server' };
      } else {
        return { success: false, reason: 'network' };
      }
    }
  };
  
export const deleteSpecificIdea = async (
    ideaId: number
  ): Promise<DeletedIdeaResult> => {
    try {
      const response = await axios.delete(
        `${serverRoute}/api/launch/delete/specific/idea`,
        {
          params: { ideaId },
        }
      );
  
      return {
        success: response.data.isDeleted
      };
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 409) {
          return { success: false, reason: 'duplicate' };
        }
        return { success: false, reason: 'server' };
      } else {
        return { success: false, reason: 'network' };
      }
    }
  };