"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn, ScaleIn } from "@/components/ui/motion";
import { generateProjectPlan } from "@/app/actions/generate-plan";
import { Sparkles, ArrowRight, Loader2, CheckCircle2, Code2, Calendar, Layers } from "lucide-react";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/client";

export default function NewProjectPage() {
  const router = useRouter();
  const [step, setStep] = useState<"input" | "generating" | "review">("input");
  const [prompt, setPrompt] = useState("");
  const [plan, setPlan] = useState<any>(null);
  const [isSaving, setIsSaving] = useState(false);

  // 1. Handle AI Generation
  async function handleGenerate() {
    if (!prompt.trim()) return toast.error("Please describe your idea first");
    
    setStep("generating");
    
    const result = await generateProjectPlan(prompt);
    
    if (!result.success) {
      setStep("input");
      toast.error(result.error);
      return;
    }

    setPlan(result.plan);
    setStep("review");
  }

  // 2. Save Project to Database
  async function handleCreateProject() {
    setIsSaving(true);
    const supabase = createClient();
    
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      toast.error("You must be logged in");
      return;
    }

    const { error } = await supabase
      .from("projects")
      .insert({
        owner_id: user.id,
        name: plan.name,
        description: plan.description,
        status: "planning",
        // We'll store the full JSON plan in a dedicated column or as unstructured data
        // For now, let's assume your schema has a 'project_plan' JSONB column
        // If not, we will add it in the next SQL step.
      })
      .select()
      .single();

    if (error) {
      toast.error("Failed to create project: " + error.message);
      setIsSaving(false);
      return;
    }

    toast.success("Project created successfully!");
    router.push("/dashboard");
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      {/* STEP 1: INPUT */}
      {step === "input" && (
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-2xl mb-6">
              <Sparkles className="h-8 w-8 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">What do you want to build?</h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Describe your idea in plain English. The more detail, the better. 
              NexusAI will generate a complete roadmap.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-2 rounded-[2rem] shadow-xl border border-slate-200">
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. A marketplace for freelance graphic designers where they can upload portfolios, set prices, and get booked by clients..."
              className="min-h-[200px] text-lg border-none focus-visible:ring-0 resize-none p-6 rounded-[1.5rem]"
            />
            <div className="flex justify-between items-center p-4 border-t border-slate-100 bg-slate-50/50 rounded-b-[1.5rem]">
              <span className="text-sm text-slate-400 font-medium pl-2">
                {prompt.length} characters
              </span>
              <Button 
                onClick={handleGenerate}
                disabled={!prompt.trim()}
                className="h-12 px-8 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg shadow-indigo-200 transition-all hover:scale-105"
              >
                Generate Plan <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </FadeIn>
      )}

      {/* STEP 2: GENERATING ANIMATION */}
      {step === "generating" && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full animate-pulse" />
            <Loader2 className="h-16 w-16 text-indigo-600 animate-spin relative z-10" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-2">Architecting your solution...</h2>
          <p className="text-slate-500 animate-pulse">Analyzing requirements • Selecting tech stack • Estimating timeline</p>
        </div>
      )}

      {/* STEP 3: REVIEW PLAN */}
      {step === "review" && plan && (
        <ScaleIn>
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">{plan.name}</h1>
              <p className="text-slate-500 text-lg">{plan.tagline}</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setStep("input")} className="h-12 border-slate-300">
                Edit Prompt
              </Button>
              <Button 
                onClick={handleCreateProject} 
                disabled={isSaving}
                className="h-12 px-8 bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg shadow-green-200"
              >
                {isSaving ? <Loader2 className="animate-spin" /> : "Create Project"}
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Overview Card */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-indigo-500" /> Executive Summary
                </h3>
                <p className="text-slate-600 leading-relaxed">{plan.description}</p>
              </div>

              {/* Features List */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                 <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500" /> Core Features
                </h3>
                <div className="space-y-4">
                  {plan.features.map((feature: any, i: number) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="mt-1 h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{feature.title}</h4>
                        <p className="text-sm text-slate-600 mt-1">{feature.description}</p>
                        <div className="mt-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          Complexity: <span className={feature.complexity === "High" ? "text-red-500" : "text-green-500"}>{feature.complexity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl">
                 <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-indigo-400" /> Tech Stack
                </h3>
                <div className="space-y-4">
                  {plan.techStack.map((tech: any, i: number) => (
                    <div key={i} className="border-b border-slate-800 pb-3 last:border-0">
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">{tech.category}</div>
                      <div className="font-bold text-lg text-indigo-300">{tech.tool}</div>
                      <div className="text-xs text-slate-500 mt-1">{tech.reason}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                 <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-indigo-500" /> Roadmap
                </h3>
                <div className="space-y-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                   {plan.timeline.map((phase: any, i: number) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-1.5 top-1.5 h-4 w-4 rounded-full bg-indigo-500 border-4 border-white shadow-sm" />
                      <div className="font-bold text-slate-900">{phase.phase}</div>
                      <div className="text-xs font-semibold text-indigo-600 bg-indigo-50 inline-block px-2 py-0.5 rounded-full mb-1">
                        {phase.duration}
                      </div>
                      <p className="text-sm text-slate-500">{phase.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScaleIn>
      )}
    </div>
  );
}