import { GoogleGenerativeAI } from '@google/generative-ai';

// Ensure this is only called server-side
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro'
});
