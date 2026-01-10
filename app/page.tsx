"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/Navbar";
import { FadeIn, TiltCard } from "@/components/ui/motion";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { AnimatedHero } from "@/components/ui/animated-hero";
import { PricingWrapper, Heading, Price, Paragraph } from "@/components/ui/animated-pricing-cards"; // Import new components
import { 
  ArrowRight, Code2, Zap, Brain, Rocket, 
  CheckCircle2, XCircle, Clock, Coins, 
  Wallet
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-vivid-purple/20 overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-vivid-purple/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
          <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-vivid-blue/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
        </div>

        <ContainerScroll
          titleComponent={<AnimatedHero />}
        >
          <div className="w-full h-full bg-slate-50 overflow-hidden rounded-2xl relative">
             <div className="absolute inset-0 overflow-y-auto custom-scrollbar">
                <div className="scale-[0.8] origin-top md:scale-100">
                  <DashboardPreview />
                </div>
             </div>
          </div>
        </ContainerScroll>
      </section>

      {/* --- COMPARISON SECTION --- */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">The New Standard</h2>
            <p className="text-xl text-slate-500">Why the old way is obsolete.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn delay={0.2} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-100 rounded-2xl">
                  <XCircle className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Traditional Dev</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-600">
                  <Clock className="h-5 w-5 text-red-400 shrink-0" /> 6-12 Months to Launch
                </li>
                <li className="flex gap-3 text-slate-600">
                  <Coins className="h-5 w-5 text-red-400 shrink-0" /> High Cost ($100k+)
                </li>
              </ul>
            </FadeIn>

            <TiltCard className="p-8 rounded-[2rem] bg-slate-900 text-white border border-slate-800 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/20 rounded-2xl">
                  <CheckCircle2 className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold">NexusAI</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-300">
                  <Zap className="h-5 w-5 text-green-400 shrink-0" /> 3 Weeks to Launch
                </li>
                <li className="flex gap-3 text-slate-300">
                  <Wallet className="h-5 w-5 text-green-400 shrink-0" /> Fraction of the Cost
                </li>
              </ul>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
               Your Entire Team.<br/>
               <span className="text-slate-400">In One Tab.</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
            <TiltCard className="md:col-span-2 rounded-[2.5rem] bg-[#fdf4ff] border border-vivid-pink/10 p-10 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-vivid-pink/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-vivid-pink/20 transition-colors duration-700" />
              <div>
                <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                  <Code2 className="h-6 w-6 text-vivid-pink" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">AI That Writes Code</h3>
                <p className="text-lg text-slate-600 max-w-lg">
                  Describe what you need, and NexusAI writes production-ready code, creates the design, and adds security.
                </p>
              </div>
            </TiltCard>

            <TiltCard className="md:row-span-2 rounded-[2.5rem] bg-[#f0f9ff] border border-vivid-blue/10 p-10 flex flex-col relative overflow-hidden group">
               <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                  <Brain className="h-6 w-6 text-vivid-blue" />
               </div>
               <h3 className="text-3xl font-bold text-slate-900 mb-4">Future Vision</h3>
               <p className="text-lg text-slate-600 mb-8">
                 Predictive analysis that warns you about missed deadlines weeks in advance.
               </p>
               <div className="flex-1 bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex flex-col justify-center">
                 <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-red-500 font-bold text-sm">RISK DETECTED</span>
                 </div>
                 <p className="font-medium text-slate-800">Deadline at risk by 14 days.</p>
               </div>
            </TiltCard>

            <TiltCard className="rounded-[2.5rem] bg-[#fff7ed] border border-vivid-orange/10 p-10 group overflow-hidden relative">
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                  <Rocket className="h-6 w-6 text-vivid-orange" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Auto Deploy</h3>
                <p className="text-slate-600">Push to production instantly.</p>
              </div>
            </TiltCard>

            <TiltCard className="rounded-[2.5rem] bg-[#f5f3ff] border border-vivid-purple/10 p-10 group overflow-hidden relative">
              <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-vivid-purple" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Instant Speed</h3>
              <p className="text-slate-600">No more waiting for compilation.</p>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* --- ANIMATED PRICING SECTION --- */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4 text-slate-900">Simple Pricing</h2>
            <p className="text-xl text-slate-500">Democratizing software development.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto place-items-center">
            
            {/* FREE TIER */}
            <PricingWrapper contactHref="/signup" type="crosses" className="bg-slate-50 border border-slate-200 text-slate-900" waveColor="text-slate-300">
              <Heading>Free</Heading>
              <Price>
                $0<span className="text-2xl font-medium text-slate-400 align-middle ml-2">/mo</span>
              </Price>
              <Paragraph>
                <ul className="space-y-4 mt-4">
                   <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-slate-900"/> Up to 5 People</li>
                   <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-slate-900"/> Basic AI Planning</li>
                   <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-slate-900"/> Community Support</li>
                </ul>
              </Paragraph>
            </PricingWrapper>

            {/* STARTUP TIER (Highlighted) */}
            <PricingWrapper contactHref="/signup" type="waves" className="bg-vivid-purple text-white border-none scale-105 shadow-vivid-purple/30" waveColor="text-white/10">
              <Heading>Startup</Heading>
              <Price>
                $99<span className="text-2xl font-medium text-purple-200 align-middle ml-2">/mo</span>
              </Price>
              <Paragraph>
                <ul className="space-y-4 mt-4">
                   <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-white"/> Unlimited Projects</li>
                   <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-white"/> Advanced Code Gen</li>
                   <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-white"/> Priority Support</li>
                </ul>
              </Paragraph>
            </PricingWrapper>

            {/* ENTERPRISE TIER */}
            <PricingWrapper contactHref="/contact" type="crosses" className="bg-slate-900 text-white" waveColor="text-white/10">
              <Heading>Scale</Heading>
              <Price>
                Custom
              </Price>
              <Paragraph>
                <ul className="space-y-4 mt-4 text-slate-300">
                   <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-white"/> Dedicated Servers</li>
                   <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-white"/> Custom AI Models</li>
                   <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-white"/> SLA Guarantee</li>
                </ul>
              </Paragraph>
            </PricingWrapper>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>© 2026 NexusAI Inc. Building the future.</p>
        </div>
      </footer>
    </div>
  );
}