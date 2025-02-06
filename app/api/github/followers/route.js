export async function GET(request) {
    try {
        const profileData = await fetch("https://api.github.com/users/abdul-ghaffar01/followers", {
            headers: {
                Authorization: "token " + process.env.GITHUB_PAT
            }
        });
        const data = await profileData.json()
        return new Response(JSON.stringify(data))
    } catch (error) {
        console.log(error)
    }
}