import { NextResponse } from "next/server";

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || "";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { query, gmail } = body;

        let n8nResponse: Response;
        try {
            // POST lets us send a JSON body — Node.js fetch does not allow body on GET
            n8nResponse = await fetch(N8N_WEBHOOK_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query, gmail }),
            });
        } catch (networkError) {
            console.error("[n8n] Network error reaching webhook:", networkError);
            return NextResponse.json(
                { error: "Could not reach the generation service. Please try again later." },
                { status: 503 }
            );
        }

        const responseText = await n8nResponse.text();
        console.log(`[n8n] Status: ${n8nResponse.status} | Body: ${responseText}`);

        if (n8nResponse.status >= 400) {
            return NextResponse.json(
                {
                    error: `n8n returned ${n8nResponse.status}. Make sure your n8n workflow is ACTIVE.`,
                    detail: responseText,
                },
                { status: 502 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("[API] Unexpected error:", error);
        return NextResponse.json(
            { error: "Internal server error." },
            { status: 500 }
        );
    }
}
