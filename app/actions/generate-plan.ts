"use server";

import { generateObject } from "ai";
import { google } from "@ai-sdk/google";
import { z } from "zod";

const projectSchema = z.object({
  name: z.string().describe("A catchy name for the project"),
  tagline: z.string().describe("A one-sentence value proposition"),
  description: z.string().describe("A professional technical summary of the project"),
  features: z.array(z.object({
    title: z.string(),
    description: z.string(),
    complexity: z.enum(["Low", "Medium", "High"]),
  })).describe("List of core features to build"),
  techStack: z.array(z.object({
    category: z.string().describe("e.g., Frontend, Database, AI"),
    tool: z.string().describe("e.g., Next.js, Supabase"),
    reason: z.string().describe("Why this tool was chosen"),
  })),
  timeline: z.array(z.object({
    phase: z.string(),
    duration: z.string(),
    focus: z.string(),
  })),
});

export async function generateProjectPlan(userPrompt: string) {
  try {
    const { object } = await generateObject({
      model: google("gemini-2.0-flash-lite"), 
      schema: projectSchema,
      prompt: `
        You are an expert CTO and Senior Product Manager.
        Analyze this project idea: "${userPrompt}"
        
        Create a comprehensive project plan. 
        - Be realistic about complexity.
        - Choose a modern, scalable tech stack (prefer Next.js/Supabase/Tailwind).
        - Break down features into MVP (Minimum Viable Product) requirements.
      `,
    });

    return { success: true, plan: object };
  } catch (error) {
    console.error("AI Generation Error:", error);
    return { success: false, error: "Failed to generate plan. Please try again." };
  }
}