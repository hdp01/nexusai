"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/Navbar";
import { TextReveal, SmoothAppear, TiltCard, FadeIn, ScaleIn } from "@/components/ui/motion";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { 
  ArrowRight, Bot, Zap, Sparkles, Code2, Brain, 
  Rocket, CheckCircle2, XCircle, Clock, Coins, 
  Users, ShieldCheck, LineChart, Wallet, Search
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-vivid-purple/20 overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        {/* Aurora Background */}
        <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-vivid-purple/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
          <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-vivid-blue/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-vivid-pink/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <SmoothAppear>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/60 shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)] backdrop-blur-md mb-8 hover:scale-105 transition-transform cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vivid-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-vivid-purple"></span>
              </span>
              <span className="text-sm font-bold bg-gradient-to-r from-vivid-purple to-vivid-pink bg-clip-text text-transparent">
                NexusAI v1.0 is Live
              </span>
            </div>
          </SmoothAppear>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1] text-slate-900">
            <TextReveal text="Your AI-Powered" />
            <br />
            <span className="bg-gradient-to-r from-vivid-blue via-vivid-purple to-vivid-pink bg-clip-text text-transparent pb-2 inline-block">
              <TextReveal text="Software Team" delay={0.4} />
            </span>
          </h1>

          <SmoothAppear delay={0.8}>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
              It's like having a <span className="text-vivid-purple font-bold">CTO + Project Manager + Senior Dev</span> all rolled into one.
              Build production-ready software 10x faster and cheaper.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/signup">
                <Button className="h-16 px-10 rounded-full text-xl font-bold bg-slate-900 text-white hover:bg-slate-800 hover:scale-105 transition-all shadow-2xl shadow-slate-900/20">
                  Start Building Free
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" className="h-16 px-10 rounded-full text-xl font-bold bg-white/50 border-white/60 hover:bg-white/80 backdrop-blur-md">
                  View Demo
                </Button>
              </Link>
            </div>
          </SmoothAppear>
        </div>

        {/* 3D Dashboard Preview */}
        <SmoothAppear delay={1.2} className="mt-24 px-4 perspective-2000">
          <div className="max-w-6xl mx-auto transform rotate-x-12 hover:rotate-x-0 transition-transform duration-1000 ease-out">
            <div className="rounded-[2rem] p-2 bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-xl border border-white/40 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.1)]">
              <div className="rounded-[1.5rem] overflow-hidden bg-white">
                <DashboardPreview />
              </div>
            </div>
          </div>
        </SmoothAppear>
      </section>

      {/* --- COMPARISON SECTION (The Sarah Example) --- */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-20 text-center">
             <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">
               Real-World Example
             </h2>
             <p className="text-xl text-slate-500 max-w-2xl mx-auto">
               "Sarah wants to build a fitness app."
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Old Way */}
            <FadeIn delay={0.2} className="p-10 rounded-[2.5rem] bg-white border border-slate-200 opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-red-100 rounded-2xl">
                  <XCircle className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Without NexusAI</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <Clock className="h-6 w-6 text-red-400 mt-1" />
                  <div>
                    <div className="text-xl font-bold text-slate-900">9 Months</div>
                    <div className="text-slate-500">Time to launch</div>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <Coins className="h-6 w-6 text-red-400 mt-1" />
                  <div>
                    <div className="text-xl font-bold text-slate-900">$210,000 Total Cost</div>
                    <div className="text-slate-500">Hiring 3 devs + 1 PM</div>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="h-2 w-2 mt-2.5 rounded-full bg-red-400 shrink-0" />
                  <div>
                    <div className="text-xl font-bold text-slate-900">70% Risk</div>
                    <div className="text-slate-500">Likely to fail or run out of money</div>
                  </div>
                </li>
              </ul>
            </FadeIn>

            {/* The NexusAI Way */}
            <TiltCard className="p-10 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden border border-slate-800 shadow-2xl">
              <div className="absolute top-0 right-0 p-6">
                <div className="bg-vivid-purple text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Result
                </div>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-green-500/20 rounded-2xl">
                  <CheckCircle2 className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-3xl font-bold">With NexusAI</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <Zap className="h-6 w-6 text-green-400 mt-1" />
                  <div>
                    <div className="text-xl font-bold">3 Months</div>
                    <div className="text-slate-400">Launch 6 months faster</div>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <Wallet className="h-6 w-6 text-green-400 mt-1" />
                  <div>
                    <div className="text-xl font-bold">$21,500 Total Cost</div>
                    <div className="text-slate-400">Save $188,500 immediately</div>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="h-2 w-2 mt-2.5 rounded-full bg-green-400 shrink-0" />
                  <div>
                    <div className="text-xl font-bold">20% Risk</div>
                    <div className="text-slate-400">Data-driven success probability</div>
                  </div>
                </li>
              </ul>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* --- FEATURES BENTO GRID (Your Simplified Text) --- */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="mb-20">
             <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
               Everything You Need.<br/>
               <span className="text-slate-400">Simplified.</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[380px]">
            
            {/* Feature 1: AI Code Writing */}
            <TiltCard className="md:col-span-2 rounded-[2.5rem] bg-[#fdf4ff] border border-vivid-pink/10 p-10 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-vivid-pink/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-vivid-pink/20 transition-colors duration-700" />
              <div>
                <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                  <Code2 className="h-7 w-7 text-vivid-pink" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">AI That Actually Writes Code</h3>
                <p className="text-lg text-slate-600 max-w-lg">
                  You describe what you need ("Login page with Google Auth"), and AI writes the actual code, creates the design, and adds security. 
                  <span className="font-bold text-slate-900"> One developer does the work of three.</span>
                </p>
              </div>
            </TiltCard>

            {/* Feature 2: Future Vision */}
            <TiltCard className="md:row-span-2 rounded-[2.5rem] bg-[#f0f9ff] border border-vivid-blue/10 p-10 flex flex-col relative overflow-hidden group">
               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent opacity-50" />
               <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                  <Zap className="h-7 w-7 text-vivid-blue" />
               </div>
               <h3 className="text-3xl font-bold text-slate-900 mb-4">Future Vision</h3>
               <p className="text-lg text-slate-600 mb-8">
                 Like a weather forecast for your project. 
                 "Warning: You'll miss your deadline by 2 weeks."
               </p>
               
               <div className="flex-1 bg-white rounded-2xl p-6 shadow-xl border border-slate-100 transform group-hover:scale-105 transition-transform duration-700 flex flex-col justify-center">
                 <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-red-500 font-bold text-sm">RISK DETECTED</span>
                 </div>
                 <p className="font-medium text-slate-800">Deadline at risk by 14 days.</p>
                 <p className="text-sm text-slate-500 mt-2">Suggestion: Add 1 backend dev.</p>
               </div>
            </TiltCard>

            {/* Feature 3: Smart Memory */}
            <TiltCard className="rounded-[2.5rem] bg-[#fff7ed] border border-vivid-orange/10 p-10 group overflow-hidden relative">
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                  <Brain className="h-7 w-7 text-vivid-orange" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Smart Memory</h3>
                <p className="text-slate-600">
                   AI remembers everything. "Why did we choose React?" - AI shows the decision from 6 months ago.
                </p>
              </div>
            </TiltCard>

            {/* Feature 4: Money Tracker */}
            <TiltCard className="rounded-[2.5rem] bg-[#f5f3ff] border border-vivid-purple/10 p-10 group overflow-hidden relative">
              <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                <Wallet className="h-7 w-7 text-vivid-purple" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Money Tracker</h3>
              <p className="text-slate-600">
                "You have 8 months of runway left." Startups fail when they run out of money—not anymore.
              </p>
            </TiltCard>

          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-slate-500">4 Simple Steps.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { num: "1", title: "Describe Your Idea", desc: "Just talk to NexusAI like you're talking to a person. 'I want a food delivery app for college campuses.'" },
              { num: "2", title: "AI Creates Everything", desc: "Within minutes, get a project plan, timeline, feature list, budget estimate, and starter code." },
              { num: "3", title: "AI Helps Build It", desc: "AI writes code alongside your developers, catches bugs, and warns you about risks." },
              { num: "4", title: "AI Manages Everything", desc: "Tracks progress, sends reminders, and generates reports automatically." }
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.1} className="flex gap-6 items-start bg-white p-8 rounded-[2rem] border border-slate-200 hover:shadow-lg transition-shadow">
                 <div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-bold shrink-0">
                   {step.num}
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                   <p className="text-lg text-slate-600">{step.desc}</p>
                 </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-xl text-slate-500">Democratizing software development.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free */}
            <TiltCard className="p-8 rounded-[2rem] bg-white border border-slate-200">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-4xl font-black mb-6">$0<span className="text-lg font-medium text-slate-500">/mo</span></div>
              <p className="text-slate-500 mb-6">Try it with small projects.</p>
              <ul className="space-y-4 mb-8">
                {["Up to 5 People", "Basic AI Planning", "Community Support"].map(f => (
                  <li key={f} className="flex gap-2 text-slate-600"><CheckCircle2 className="h-5 w-5 text-slate-900" /> {f}</li>
                ))}
              </ul>
              <Button variant="outline" className="w-full h-12 rounded-xl text-lg">Get Started</Button>
            </TiltCard>

            {/* Startup */}
            <TiltCard className="p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-vivid-purple px-4 py-1 rounded-bl-2xl font-bold text-sm">BEST VALUE</div>
              <h3 className="text-2xl font-bold mb-2">Startup</h3>
              <div className="text-4xl font-black mb-6">$99<span className="text-lg font-medium text-slate-400">/mo</span></div>
              <p className="text-slate-300 mb-6">Perfect for new companies.</p>
              <ul className="space-y-4 mb-8">
                {["Up to 25 People", "Advanced Code Gen", "Predictive Analytics", "Priority Support"].map(f => (
                  <li key={f} className="flex gap-2 text-slate-300"><CheckCircle2 className="h-5 w-5 text-vivid-purple" /> {f}</li>
                ))}
              </ul>
              <Button className="w-full h-12 rounded-xl text-lg bg-vivid-purple hover:bg-vivid-purple/90">Start Trial</Button>
            </TiltCard>

            {/* Growing */}
            <TiltCard className="p-8 rounded-[2rem] bg-white border border-slate-200">
              <h3 className="text-2xl font-bold mb-2">Growing</h3>
              <div className="text-4xl font-black mb-6">$499<span className="text-lg font-medium text-slate-500">/mo</span></div>
              <p className="text-slate-500 mb-6">For unlimited growth.</p>
              <ul className="space-y-4 mb-8">
                {["Unlimited Team", "Custom AI Models", "Dedicated Manager", "SLA Guarantee"].map(f => (
                  <li key={f} className="flex gap-2 text-slate-600"><CheckCircle2 className="h-5 w-5 text-slate-900" /> {f}</li>
                ))}
              </ul>
              <Button variant="outline" className="w-full h-12 rounded-xl text-lg">Contact Sales</Button>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 flex justify-between items-center text-slate-400">
          <div className="font-bold text-slate-900 text-xl flex items-center gap-2">
            <div className="h-8 w-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            NexusAI
          </div>
          <p>© 2026. Made for builders.</p>
        </div>
      </footer>
    </div>
  );
}