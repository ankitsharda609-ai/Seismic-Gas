
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Seismic Guard AI Assistant, a specialist in earthquake gas safety for the Sherman Oaks and Los Angeles area.
Your goal is to provide accurate, reassuring, and safety-focused information about:
1. Automatic Seismic Gas Shutoff Valves (SGSOV).
2. Los Angeles County gas safety regulations (LAMC §94.1217).
3. Post-earthquake gas safety procedures.
4. Gas leak detection and prevention.

If asked about pricing, mention that we offer free on-site estimates at 14500 Ventura Blvd.
Always emphasize that gas safety work should be performed by licensed professionals (C-36 license).
Keep answers concise and professional.
`;

export const getSafetyAdvice = async (userPrompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm having trouble connecting to the safety database. Please call our office directly at (844) 340-6413 for immediate assistance.";
  }
};
