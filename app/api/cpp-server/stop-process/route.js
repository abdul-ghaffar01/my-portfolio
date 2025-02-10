export async function POST(request) {
    const body = await request.json();
    const { sessionId } = body;
    try {
        // Requesting my cpp-server to start a process
        const resp = await fetch(process.env.STOP_PROCESS, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                sessionId
            })
        })
        const result = await resp.json();
        return new Response(JSON.stringify(result));
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ message: "Cpp server has stopped working", error }));
    }
}