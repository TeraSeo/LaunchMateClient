'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Box,  Stack, Container, Paper } from '@mui/material';
import { questionOptions, steps } from '@/constants/Option';
import { Colors } from '@/constants/Color';
import LaunchTitleText from '@/components/launch/texts/LaunchTitleText';
import LaunchInput from '@/components/launch/LaunchInput';
import LaunchOptionList from '@/components/launch/LaunchOptionList';
import LaunchNextButton from '@/components/launch/buttons/LaunchNextButton';
import LaunchBackButton from '@/components/launch/buttons/LaunchBackButton';
import { useTypingEffect } from '@/hooks/useTypingText';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { getTokenCookie } from '@/services/TokenService';
import { createIdea } from '@/services/LaunchService';

const LaunchPage: NextPage = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [input, setInput] = useState('');
    const [selected, setSelected] = useState<string | null>(null);
    const [answers, setAnswers] = useState<string[]>(Array(steps.length).fill(''));
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
  
    const currentStep = steps[activeStep];
    const options = questionOptions[currentStep.key as keyof typeof questionOptions];
  
    const { title, subtitle } = useTypingEffect(currentStep.label, currentStep.subtitle);
  
    const filteredOptions = useMemo(() => {
      if (!input) return options;
      return options.filter(opt =>
        opt.toLowerCase().includes(input.toLowerCase())
      );
    }, [input, options]);
  
    const handleNext = async () => {
      const value = selected || input.trim();
      if (!value) return;
      setAnswers(prev => {
        const newAnswers = [...prev];
        newAnswers[activeStep] = value;
        return newAnswers;
      });
      if (activeStep === steps.length - 1) {
        const finalAnswers = [...answers];
        finalAnswers[activeStep] = selected || input.trim();
        const tokenVal = getTokenCookie();
        if (tokenVal !== null) {
          const response = await createIdea({token: tokenVal, answers: finalAnswers});
          if (response.success) {
            router.push(`/launch/idea/${response.ideaId}`);
          }
        }
        return;
      }
      setInput('');
      setSelected(null);
      setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    };
  
    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && input.trim()) {
        setSelected(input.trim());
      }
    };
  
    const handleOptionClick = (option: string) => {
      setSelected(option);
      setInput(option);
    };
  
    const handleBack = () => {
      setInput('');
      setSelected(null);
      setActiveStep((prev) => Math.max(prev - 1, 0));
    };
  
    useEffect(() => {
      setInput(answers[activeStep] || '');
      setSelected(answers[activeStep] || null);
    }, [activeStep]);
  
    return (
      <Box sx={{ background: Colors.GRADIENT_PRIMARY }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              pt: { xs: 10, md: 12 },
              pb: { xs: 6, md: 8 },
            }}
          >
            <Container maxWidth="md">
                <LaunchTitleText label={title} subtitle={subtitle} />

                <Paper
                    elevation={0}
                    sx={{
                        border: `2px solid ${Colors.SECONDARY_LIGHT}`,
                        borderRadius: 2,
                        mb: 3,
                        px: 2,
                        py: 1,
                        background: Colors.BACKGROUND,
                        transition: 'border 0.2s',
                    }}
                    >
                    <LaunchInput inputRef={inputRef} input={input} setInput={setInput} setSelected={setSelected} handleInputKeyDown={handleInputKeyDown} />
                </Paper>

                <LaunchOptionList
                    filteredOptions={filteredOptions}
                    selected={selected}
                    handleOptionClick={handleOptionClick}
                />

            <Stack direction="row" justifyContent="space-between" mt={4}>
                <LaunchBackButton
                    activeStep={activeStep}
                    handleBack={handleBack}
                />
                
                <LaunchNextButton
                    input={input}
                    selected={selected}
                    handleNext={handleNext}
                    activeStep={activeStep}
                    totalSteps={steps.length}
                />
            </Stack>
        </Container>
        </Box>
    </Container>
    </Box>
  );
}

export default LaunchPage;