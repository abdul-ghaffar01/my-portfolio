import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import stringSimilarity from 'string-similarity';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chatbotData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../training/train.json'), 'utf-8')
);


export function getChatbotResponse(userMessage = '') {
    const input = userMessage.trim().toLowerCase();

    if (!input) {
        return "I didn't catch that. Can you rephrase?";
    }

    const tags = chatbotData.flatMap(entry => entry.tags);
    const bestMatch = stringSimilarity.findBestMatch(input, tags).bestMatch;

    if (bestMatch.rating > 0.5) {
        const matchedEntry = chatbotData.find(entry => entry.tags.includes(bestMatch.target));
        if (matchedEntry?.responses?.length) {
            return matchedEntry.responses[Math.floor(Math.random() * matchedEntry.responses.length)];
        }
    }

    // Default fallback response
    const fallback = chatbotData.find(e => e.tags.includes('default'));
    return fallback?.responses?.[Math.floor(Math.random() * fallback.responses.length)]
        || "I'm not sure how to respond to that.";
}
