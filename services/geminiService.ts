
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function askAIAboutPortfolio(query: string) {
  const model = ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: query,
    config: {
      systemInstruction: "Você é um assistente virtual para o portfólio de Ana Clara, uma jornalista estudante brasileira dedicada à cultura contemporânea, política urbana e questões sociais. Responda de forma elegante, profissional e informativa sobre o trabalho dela, baseando-se no contexto de uma jornalista interessada em narrativas de impacto.",
      temperature: 0.7,
    },
  });

  const response = await model;
  return response.text;
}
