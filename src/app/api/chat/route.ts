import { GoogleGenerativeAI } from "@google/generative-ai";
import { getSystemInstructions } from "@/lib/gemini";
import { NextResponse } from "next/server";

// Dynamic behavior since it reads live-log.json at runtime
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not defined in environment variables. Falling back to mock responses.");
      // Fallback for development if no key is set yet
      return NextResponse.json({
        role: "model",
        content: "I am ready! Please set your GEMINI_API_KEY environment variable in Vercel or your local .env.local file to speak with my AI chatbot."
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const systemInstruction = getSystemInstructions();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction,
    });

    // Separate the last message (current user query) from the history
    const history = messages.slice(0, -1);
    const lastMessage = messages[messages.length - 1];

    if (!lastMessage || lastMessage.role !== "user") {
      return NextResponse.json(
        { error: "Last message must be from user" },
        { status: 400 }
      );
    }

    // Format history for Gemini SDK
    let geminiHistory = history.map((msg: { role: string; content: string }) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    // Gemini requires the history to start with a 'user' message.
    // We filter out any initial greeting from the model.
    const firstUserIndex = geminiHistory.findIndex(msg => msg.role === "user");
    if (firstUserIndex !== -1) {
      geminiHistory = geminiHistory.slice(firstUserIndex);
    } else {
      geminiHistory = [];
    }

    const chat = model.startChat({
      history: geminiHistory,
    });

    const result = await chat.sendMessage(lastMessage.content);
    const responseText = result.response.text();

    return NextResponse.json({
      role: "model",
      content: responseText,
    });
  } catch (error: any) {
    console.error("Error in chat API route:", error);
    return NextResponse.json(
      { error: error?.message || "An error occurred during generative AI execution" },
      { status: 500 }
    );
  }
}
