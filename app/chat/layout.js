import React from 'react'

export const metadata = {
    title: "AI Chat | Abdul Ghaffar",
    description: "Chat live with Abdul Ghaffar's AI chatbot — get answers, explore projects, and learn more about my work.",
    openGraph: {
        title: "AI Chat | Abdul Ghaffar",
        description: "Chat live with Abdul Ghaffar's AI chatbot — get answers, explore projects, and learn more about my work.",
        url: "https://iabdulghaffar.com/chat",
        siteName: "Abdul Ghaffar",
        images: [
            {
                url: "https://iabdulghaffar.com/og_chat.png",
                width: 1200,
                height: 630,
                alt: "AI Chat with Abdul Ghaffar",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};


const layout = ({ children }) => {
    return (<>
        {children}
    </>
    )
}

export default layout