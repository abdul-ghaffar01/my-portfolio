import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        // Define the path to store the visits data
        const filePath = path.join(process.cwd(), 'data', 'visits.json');
        const dirPath = path.dirname(filePath);

        // Ensure directory exists
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        let visitsData = { count: 0 };

        // Read existing visit count
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            visitsData = JSON.parse(data);
        }

        // Increment visit count
        visitsData.count += 1;

        // Write updated count back to file
        fs.writeFileSync(filePath, JSON.stringify(visitsData, null, 2));

        return new Response(JSON.stringify(visitsData), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to track visits' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
