import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-davinci-002", {
    prompt: generatePrompt(req.body.prompt),
    temperature: 1,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(prompt) {
  const capitalizedPrompts =
    prompt[0].toUpperCase() + prompt.slice(1).toLowerCase();
  return `
Prompt: What are other names for lil Wayne
Response: Weezy F. Baby, Tunechi, Dr. Carter
Prompt: Carnival Curise Names
Response: Horizon, Mardi Gras, Breeze
Animal: ${capitalizedPrompts}
Names:`;
}
