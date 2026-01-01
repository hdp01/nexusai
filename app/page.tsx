"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/Navbar";
import { FadeIn, ScaleIn } from "@/components/ui/motion";
import { DashboardPreview } from "@/components/landing/DashboardPreview"; // Import the new component
import { ArrowRight, Bot, Zap, ShieldCheck, BarChart3, ChevronRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-4">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-sm font-medium text-secondary-foreground mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              v1.0 Public Beta is Live
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Software Development, <br />
              <span className="text-primary">Orchestrated by AI</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Plan projects, generate code, and predict blockers before they happen. 
              NexusAI turns your engineering team into a powerhouse.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/signup">
                <Button size="lg" className="h-14 px-8 rounded-full text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform bg-primary text-white">
                  Start Building Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-lg border-border bg-background/50 hover:bg-accent/50">
                  View Demo
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* The New Dashboard Preview */}
        <ScaleIn delay={0.2} className="relative z-10">
          <div className="rounded-2xl p-2 bg-gradient-to-b from-border/50 to-transparent backdrop-blur-sm">
            <DashboardPreview />
          </div>
          {/* Glow behind preview */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-2xl -z-10 opacity-50 rounded-[3rem]" />
        </ScaleIn>
      </section>

      {/* Social Proof / Trusted By (Optional) */}
      <div className="py-10 border-y border-border/50 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-6">TRUSTED BY INNOVATIVE TEAMS</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple Text Logos for now */}
             <span className="text-xl font-bold">Acme Corp</span>
             <span className="text-xl font-bold">GlobalTech</span>
             <span className="text-xl font-bold">Nebula</span>
             <span className="text-xl font-bold">Vertex</span>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Everything you need to ship faster</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Stop fighting with Jira and boilerplate code. Let our AI agents handle the heavy lifting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={Bot} 
              title="AI Project Planning" 
              desc="Describe your idea in plain English. We generate the roadmap, tasks, and tech stack instantly." 
            />
            <FeatureCard 
              icon={Zap} 
              title="Instant Code Gen" 
              desc="Generate production-ready modules, API endpoints, and database schemas with one click." 
            />
            <FeatureCard 
              icon={BarChart3} 
              title="Predictive Health" 
              desc="Our ML models analyze your velocity to predict missed deadlines weeks in advance." 
            />
            <FeatureCard 
              icon={ShieldCheck} 
              title="Automated Reviews" 
              desc="Every pull request is scanned for security vulnerabilities, bugs, and best practices." 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center text-primary font-bold">N</div>
             <span>© 2026 NexusAI Inc.</span>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon className="h-6 w-6 text-primary group-hover:text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
        {title} 
        <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
      </h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}