export const Colors = {
  // Primary colors
  PRIMARY: '#121212', // Jet Black - Main text, background emphasis, brand color
  SECONDARY: '#2979FF', // Electric Blue - Emphasis buttons, links, action-inducing points
  ACCENT: '#E0E0E0', // Platinum Gray - Box backgrounds, spacing, input backgrounds
  BACKGROUND: '#1E1E1E', // Soft Charcoal - Overall background with slightly brighter black tone
  TEXT: '#FFFFFF', // Pure White - Text contrast optimization
  
  // Additional utility colors
  PRIMARY_DARK: '#0A0A0A',
  PRIMARY_LIGHT: '#2A2A2A',
  SECONDARY_LIGHT: '#5B9AFF',
  SECONDARY_DARK: '#1E5FD9',
  ACCENT_DARK: '#B0B0B0',
  ACCENT_LIGHT: '#F5F5F5',
  BACKGROUND_LIGHT: '#2A2A2A',
  BACKGROUND_DARK: '#0F0F0F',
  TEXT_SECONDARY: '#CCCCCC',
  TEXT_MUTED: '#999999',
  
  // Status colors
  SUCCESS: '#4CAF50',
  WARNING: '#FF9800',
  ERROR: '#F44336',
  INFO: '#2196F3',
  
  // Gradients
  GRADIENT_PRIMARY: 'linear-gradient(135deg, #121212 0%, #1E1E1E 100%)',
  GRADIENT_SECONDARY: 'linear-gradient(135deg, #2979FF 0%, #5B9AFF 100%)',
  GRADIENT_ACCENT: 'linear-gradient(135deg, #E0E0E0 0%, #F5F5F5 100%)',
  
  // Shadows
  SHADOW_LIGHT: '0 2px 8px rgba(0, 0, 0, 0.1)',
  SHADOW_MEDIUM: '0 4px 16px rgba(0, 0, 0, 0.15)',
  SHADOW_HEAVY: '0 8px 32px rgba(0, 0, 0, 0.2)',
  SHADOW_GLOW: '0 0 20px rgba(41, 121, 255, 0.3)',
} as const;

export type ColorKey = keyof typeof Colors; 