"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/Navbar";
import { TextReveal, SmoothAppear, TiltCard } from "@/components/ui/motion";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { ArrowRight, Bot, Zap, Sparkles, Code2, Brain, Rocket } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-vivid-purple/20">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        {/* The Aurora Background (Moving Gradients) */}
        <div className="absolute inset-0 -z-10 opacity-60">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-vivid-purple/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-vivid-blue/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-vivid-pink/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <SmoothAppear>
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-vivid-purple/20 shadow-lg shadow-vivid-purple/5 backdrop-blur-md mb-8 hover:scale-105 transition-transform cursor-default">
    <Sparkles className="h-4 w-4 text-vivid-purple animate-pulse" />
    <span className="text-sm font-bold bg-gradient-to-r from-vivid-purple to-vivid-pink bg-clip-text text-transparent">
      NexusAI 2.0 is here
    </span>
  </div>
</SmoothAppear>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
            <TextReveal text="Orchestrate Your" />
            <span className="block bg-gradient-to-r from-vivid-blue via-vivid-purple to-vivid-pink bg-clip-text text-transparent pb-4">
              <TextReveal text="Software Reality" delay={0.4} />
            </span>
          </h1>

          <SmoothAppear delay={0.8}>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              The first AI-native platform that plans, builds, and manages your engineering lifecycle. 
              <span className="text-vivid-purple font-bold"> Stop coding boilerplate. Start shipping.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/signup">
                <Button className="h-16 px-10 rounded-full text-xl font-bold bg-gray-900 text-white hover:bg-gray-800 hover:scale-105 transition-all shadow-2xl shadow-gray-900/20">
                  Get Started
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </SmoothAppear>
        </div>

        {/* --- 3D PERSPECTIVE DASHBOARD --- */}
        <SmoothAppear delay={1.2} className="mt-20 px-4 perspective-2000">
          <div className="max-w-6xl mx-auto transform rotate-x-12 hover:rotate-x-0 transition-transform duration-1000 ease-out">
            <div className="rounded-[2rem] p-2 bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-xl border border-white/40 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.1)]">
              <div className="rounded-[1.5rem] overflow-hidden bg-white/50">
                <DashboardPreview />
              </div>
            </div>
          </div>
        </SmoothAppear>
      </section>


      {/* --- BENTO GRID FEATURES --- */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="mb-20">
             <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
               Everything you need.<br/>
               <span className="text-slate-400">Nothing you don't.</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
            
            {/* Large Card */}
            <TiltCard className="md:col-span-2 rounded-[2.5rem] bg-[#fdf4ff] border border-vivid-pink/10 p-10 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-vivid-pink/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-vivid-pink/20 transition-colors duration-700" />
              <div>
                <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                  <Bot className="h-7 w-7 text-vivid-pink" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">AI Project Architect</h3>
                <p className="text-lg text-slate-600 max-w-md">
                  Describe your idea in plain English. Our LLM agents generate a complete project roadmap, 
                  database schema, and API specification in seconds.
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-white/50 w-full max-w-sm ml-auto mt-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="flex gap-3 items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-mono text-slate-500">Generating roadmap...</span>
                </div>
                <div className="h-2 w-full bg-slate-200 rounded-full mt-3 overflow-hidden">
                  <div className="h-full bg-vivid-pink w-2/3" />
                </div>
              </div>
            </TiltCard>

            {/* Tall Card */}
            <TiltCard className="md:row-span-2 rounded-[2.5rem] bg-[#f0f9ff] border border-vivid-blue/10 p-10 flex flex-col relative overflow-hidden group">
               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent opacity-50" />
               <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                  <Zap className="h-7 w-7 text-vivid-blue" />
               </div>
               <h3 className="text-3xl font-bold text-slate-900 mb-4">Instant Code Gen</h3>
               <p className="text-lg text-slate-600 mb-8">
                 Don't start from scratch. Get production-ready Next.js & Supabase code.
               </p>
               
               {/* Decorative Code Block */}
               <div className="flex-1 bg-slate-900 rounded-2xl p-6 font-mono text-xs text-blue-300 shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
                 <div className="flex gap-1.5 mb-4">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                   <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                 </div>
                 <p className="text-purple-400">export async function</p>
                 <p className="text-white">createProject(data) &#123;</p>
                 <p className="pl-4 text-slate-400">// AI generated logic</p>
                 <p className="pl-4 text-blue-400">const plan = await ai.gen()</p>
                 <p className="pl-4 text-blue-400">return db.insert(plan)</p>
                 <p className="text-white">&#125;</p>
               </div>
            </TiltCard>

            {/* Square Card 1 */}
            <TiltCard className="rounded-[2.5rem] bg-[#fff7ed] border border-vivid-orange/10 p-10 group overflow-hidden relative">
              <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                  <Rocket className="h-7 w-7 text-vivid-orange" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Automated Deploy</h3>
                <p className="text-slate-600">Push to Vercel instantly.</p>
              </div>
            </TiltCard>

            {/* Square Card 2 */}
            <TiltCard className="rounded-[2.5rem] bg-[#f5f3ff] border border-vivid-purple/10 p-10 group overflow-hidden relative">
              <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                <Brain className="h-7 w-7 text-vivid-purple" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Predictive Risks</h3>
              <p className="text-slate-600">AI forecasts delays before they happen.</p>
            </TiltCard>

          </div>
        </div>
      </section>

      {/* --- BIG CALL TO ACTION --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 -z-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-vivid-blue/20 via-vivid-purple/20 to-vivid-pink/20 -z-10" />
        
        <div className="container mx-auto px-4 text-center">
          <SmoothAppear>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">
              Ready to ship?
            </h2>
            <p className="text-xl text-slate-300 max-w-xl mx-auto mb-12">
              Join the new generation of developers building software at the speed of thought.
            </p>
            <Link href="/signup">
              <Button className="h-20 px-12 rounded-full text-2xl font-bold bg-white text-slate-900 hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]">
                Start Building Now
              </Button>
            </Link>
          </SmoothAppear>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 flex justify-between items-center text-slate-400">
          <div className="font-bold text-slate-900 text-xl">NexusAI</div>
          <p>© 2026. Made for builders.</p>
        </div>
      </footer>
    </div>
  );
}