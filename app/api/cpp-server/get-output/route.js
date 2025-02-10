export async function POST(request) {
    const body = await request.json();
    const { sessionId } = body
    
    try {
        // Requesting my cpp-server to start a process
        const resp = await fetch(`${process.env.GET_OUTPUT}?sessionId=${sessionId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const result = await resp.json();
        return new Response(JSON.stringify(result));
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ working: true, error }));
    }
}