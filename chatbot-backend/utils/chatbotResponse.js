import chatbotData from '../training/train.json' assert { type: 'json' };
import stringSimilarity from 'string-similarity';

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
