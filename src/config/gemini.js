// node --version # Should be >= 18
// npm install @google/generative-ai

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const API_KEY = "AIzaSyDvB1gQ-R4wHxFTshcEtGBNMt40RLsz7rY"; // Update the API key to the new one
  const MODEL_NAME = "gemini-1.5-flash"; // Updated model name
  
  async function runChat(prompt) {
    const genAI = new GoogleGenerativeAI(API_KEY); // Initialize the API with the updated key
    const model = genAI.getGenerativeModel({ model: MODEL_NAME }); // Updated model
  
    const generationConfig = {
      temperature: 1, // Updated temperature to match the new configuration
      topP: 0.95, // Updated topP value
      topK: 64, // Updated topK value
      maxOutputTokens: 8192, // Updated max tokens
      responseMimeType: "text/plain", // Added response MIME type
    };
  
    // Optional safety settings, can be uncommented and adjusted as needed:
    // const safetySettings = [
    //   {
    //     category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    //     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    //   },
    //   {
    //     category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    //     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    //   },
    //   {
    //     category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    //     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    //   },
    //   {
    //     category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    //     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    //   },
    // ];
  
    const chat = model.startChat({
      generationConfig,
      // safetySettings: safetySettings, // Safety settings can be adjusted if needed
      history: [
        // You can pass any chat history here if needed
      ],
    });
  
    const result = await chat.sendMessage(prompt);
    const response = result.response;
    console.log(response.text());
    return response.text();
  }
  
  export default runChat;
  