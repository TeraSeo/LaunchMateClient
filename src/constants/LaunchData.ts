export type Message = {
    role: 'user' | 'assistant';
    text: string;
    showConfirm?: boolean;
};
  
export const initialMessages: Message[] = [
  {
    role: 'assistant',
    text: "👋 Hi! I'm LaunchMate. Tell me about your startup idea — or tap the 💡 button to get a recommendation based on your answers!"
  },
];