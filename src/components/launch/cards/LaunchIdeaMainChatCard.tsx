"use client";

import { Colors } from "@/constants/Color";
import { Box, Grid, Paper, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ChatTitleText from "../texts/ChatTitleText";
import LaunchIdeaNextButton from "../buttons/LaunchIdeaNextButton";
import { initialMessages, Message } from "@/constants/LaunchData";
import { fetchGeneratedIdeaWithAnswers, fetchGeneratedIdeaWitIdeaNAnswers } from '@/services/GPTService';
import { formatStartupIdeaResult } from "@/constants/Form";
import LaunchIdeaSendButton from "../buttons/LaunchIdeaSendButton";
import LaunchGetRecommendationButton from "./LaunchGetRecommendationButton";
import LaunchIdeaLoadingText from "../texts/LaunchIdeaLoadingText";
import LaunchIdeaInputField from "../fields/LaunchIdeaInputField";
import LaunchMessageText from "../texts/LaunchMessageText";
import { useRouter } from "next/navigation";

interface LaunchIdeaMainChatCardProps {
  answers: string[];
  id: string;
}

const LaunchIdeaMainChatCard: React.FC<LaunchIdeaMainChatCardProps> = ({ answers, id }) => {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [previousDescriptions, setPreviousDescriptions] = useState<string[]>([]);
    const router = useRouter();

    const [confirmedIdx, setConfirmedIdx] = useState<number | null>(null);
    const [thinking, setThinking] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);
    const [dotCount, setDotCount] = useState(1);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, loading, thinking]);

    useEffect(() => {
      if (loading || thinking) {
        const interval = setInterval(() => {
          setDotCount((prev) => (prev % 3) + 1);
        }, 400);
        return () => clearInterval(interval);
      } else {
        setDotCount(1);
      }
    }, [loading, thinking]);

    const handleSend = async () => {
        if (!input.trim()) return;
          setMessages((prev) => [...prev, { role: 'user', text: input }]);
          setInput('');
          setLoading(true);

          try {
              const result = await fetchGeneratedIdeaWitIdeaNAnswers(answers, input);
              if (result.success) {
                  const idea = formatStartupIdeaResult(result.idea);

                  const hasWarning = idea.includes('⚠️ The provided idea does not align with the user preferences');

                  if (!hasWarning) {
                    setPreviousDescriptions((prev) => [
                      ...prev,
                      result.idea.description
                    ]);
                  }

                  setMessages((prev) => [
                      ...prev,
                      {
                          role: 'assistant',
                          text: idea,
                          showConfirm: !hasWarning,
                      },
                  ]);
              } else {
                  let errorMsg = "Failed to generate idea. Please try again.";
                  if (result.reason === 'validation') errorMsg = "Please provide more detailed answers.";
                  else if (result.reason === 'network') errorMsg = "Network error. Please check your connection.";
                  setMessages((prev) => [
                      ...prev,
                      {
                          role: 'assistant',
                          text: errorMsg,
                      },
                  ]);
              }
          } catch (_) {
              setMessages((prev) => [
                  ...prev,
                  {
                      role: 'assistant',
                      text: "Sorry, I couldn't process your request. Please try again.",
                  },
              ]);
          } finally {
              setLoading(false);
          }
      };

      const handleRecommend = async () => {
        setThinking(true);
        try {
          const result = await fetchGeneratedIdeaWithAnswers(answers, previousDescriptions);
          if (result.success) {
            const idea = formatStartupIdeaResult(result.idea);
            setPreviousDescriptions((prev) => [
              ...prev,
              result.idea.description
            ]);

            setMessages((prev) => [
              ...prev,
              {
                role: 'assistant',
                text: idea,
                showConfirm: true,
              },
            ]);
          } else {
            let errorMsg = "Failed to generate idea. Please try again.";
            if (result.reason === 'validation') errorMsg = "Please provide more detailed answers.";
            else if (result.reason === 'network') errorMsg = "Network error. Please check your connection.";
            setMessages((prev) => [
              ...prev,
              {
                role: 'assistant',
                text: errorMsg,
              },
            ]);
          }
        } finally {
          setThinking(false);
        }
      };

      const handleConfirmIdea = (msgIdx: number) => {
        setConfirmedIdx(msgIdx);
      };

      const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !loading) {
          handleSend();
        }
      };

      const handleNext = () => {
        if (confirmedIdx !== null) {
            const confirmedMessage = messages[confirmedIdx];
            const confirmedText = confirmedMessage.text;

            sessionStorage.setItem('confirmedIdeaText', confirmedText);
            
            router.push(`/launch/detail/${id}`);
        }
      };

    return (
      <Grid size={{ xs: 12, md: 8 }}>
          <Paper
            elevation={8}
            sx={{
              p: { xs: 2, sm: 2, md: 3 },
              borderRadius: 4,
              minHeight: '70vh',
              display: 'flex',
              flexDirection: 'column',
              background: Colors.BACKGROUND_LIGHT,
              boxShadow: Colors.SHADOW_HEAVY,
              mb: 2,
              mx: 'auto',
            }}
          >
            <ChatTitleText />

            <Box
              sx={{
                flex: 1,
                overflowY: 'auto',
                mb: 1.5,
                px: { xs: 0.2, sm: 1, md: 1.5 },
                maxHeight: { xs: '45vh', sm: '55vh', md: '60vh' },
                background: 'transparent',
                borderRadius: 2,
                boxShadow: Colors.SHADOW_LIGHT,
              }}
            >
              <Stack spacing={{ xs: 1, sm: 1.2, md: 1.5 }}>
                {messages.map((msg, idx) => (
                  <LaunchMessageText key={idx} idx={idx} role={msg.role} text={msg.text} showConfirm={msg.showConfirm} handleConfirmIdea={handleConfirmIdea} confirmedIdx={confirmedIdx} />
                ))}
                <LaunchIdeaLoadingText loading={loading} thinking={thinking} dotCount={dotCount} />

                <div ref={chatEndRef} />
              </Stack>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mt: 'auto',
                pt: 1,
                borderTop: `1.5px solid ${Colors.ACCENT_DARK}`,
                background: 'transparent',
              }}
            >
              <LaunchIdeaInputField input={input} setInput={setInput} handleInputKeyDown={handleInputKeyDown} loading={loading} />
              <LaunchIdeaSendButton handleSend={handleSend} loading={loading} thinking={thinking} isInputFilled={!input.trim()} />
              <LaunchGetRecommendationButton handleRecommend={handleRecommend} loading={loading} thinking={thinking} />
            </Box>

            <LaunchIdeaNextButton confirmedIdx={confirmedIdx} handleNext={handleNext} />
          </Paper>
        </Grid>
    );
}

export default LaunchIdeaMainChatCard;