export async function POST(request) {
    const body = await request.json();
    const { sessionId, input } = body
    console.log("url", process.env.SEND_INPUT)
    console.log("session id", sessionId)
    console.log("input", input)
    try {
        // Requesting my cpp-server to start a process
        const resp = await fetch(process.env.SEND_INPUT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                sessionId, input
            })
        })
        const result = await resp.json();
        return new Response(JSON.stringify(result));
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ working: true, error }));
    }
}