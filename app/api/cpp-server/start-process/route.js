export async function POST(request) {
    const body = await request.json();
    const { appName } = body;
    try {
        // Requesting my cpp-server to start a process
        const resp = await fetch(process.env.START_PROCESS, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                application: appName
            })
        })
        const result = await resp.json();
        return new Response(JSON.stringify(result));
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ working: true, error }));
    }
}