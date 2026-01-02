"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/Navbar";
import { FadeIn, ScaleIn } from "@/components/ui/motion";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { 
  ArrowRight, Bot, Zap, ShieldCheck, BarChart3, 
  ChevronRight, Clock, Users, Coins, Check, X,
  Layout, Brain, Code2, LineChart, Sparkles
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-sm font-medium text-secondary-foreground mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              NexusAI v1.0 is Live
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Your AI-Powered <br />
              <span className="text-primary">Software Team</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              It’s like having a CTO, Project Manager, and Senior Developer in one platform. 
              Build production-ready software 10x faster and cheaper.
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

        <ScaleIn delay={0.2} className="relative z-10">
          <div className="rounded-2xl p-2 bg-gradient-to-b from-border/50 to-transparent backdrop-blur-sm">
            <DashboardPreview />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-2xl -z-10 opacity-50 rounded-[3rem]" />
        </ScaleIn>
      </section>

      <section className="py-24 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Reality Check</h2>
            <p className="text-muted-foreground text-lg">Why traditional development is broken vs. the NexusAI way.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-card border border-border/50 opacity-80">
              <div className="flex items-center gap-3 mb-6 text-muted-foreground">
                <X className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-bold">The Old Way</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-red-400 mt-1" />
                  <div>
                    <span className="font-semibold block">6-12 Months</span>
                    <span className="text-sm text-muted-foreground">Time to launch MVP</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Coins className="h-5 w-5 text-red-400 mt-1" />
                  <div>
                    <span className="font-semibold block">$100,000+</span>
                    <span className="text-sm text-muted-foreground">Development costs</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-red-400 mt-1" />
                  <div>
                    <span className="font-semibold block">Large Team Required</span>
                    <span className="text-sm text-muted-foreground">Hiring designers, PMs, devs, QA</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-card border-2 border-primary/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-primary/10 rounded-bl-2xl">
                <span className="text-primary font-bold text-sm">RECOMMENDED</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Check className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-bold">The NexusAI Way</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-semibold block">3-4 Weeks</span>
                    <span className="text-sm text-muted-foreground">Time to launch MVP</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Coins className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-semibold block">Fraction of the cost</span>
                    <span className="text-sm text-muted-foreground">Save 90% on development</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Bot className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <span className="font-semibold block">AI Augmented Team</span>
                    <span className="text-sm text-muted-foreground">1 Dev + NexusAI = 5 Devs</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your New AI Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            NexusAI replaces the chaotic fragmentation of tools with a single, intelligent brain.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <PersonaCard 
            icon={Brain} 
            role="The Architect"
            title="Intelligent Planning"
            desc="Describe your idea in plain English. NexusAI generates the entire roadmap, feature list, and tech stack in minutes."
          />
          <PersonaCard 
            icon={Code2} 
            role="The Developer"
            title="Instant Code Gen"
            desc="Generates production-ready boilerplate, API endpoints, and database schemas. Junior devs become Seniors."
          />
          <PersonaCard 
            icon={LineChart} 
            role="The Manager"
            title="Predictive Health"
            desc="Forecasts deadlines and risks weeks in advance. 'You will miss the deadline by 4 days if velocity stays same.'"
          />
        </div>
      </section>

      <section className="py-24 bg-card border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <div className="space-y-8">
                <Step number="1" title="Describe Your Idea" desc="Just talk to NexusAI like a person. 'I want a food delivery app for students.'" />
                <Step number="2" title="AI Generates Plan" desc="Get a full timeline, budget, and feature breakdown instantly." />
                <Step number="3" title="Build with Assistance" desc="AI writes code, catches bugs, and manages tasks automatically." />
                <Step number="4" title="Launch & Scale" desc="Deploy with confidence. NexusAI monitors health and user feedback." />
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <div className="relative bg-background border border-border rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div className="bg-secondary px-4 py-2 rounded-lg text-sm rounded-tl-none">
                    Generate a project plan for a student food delivery app.
                  </div>
                </div>
                <div className="space-y-3 pl-14">
                  <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
                  <div className="h-4 w-full bg-muted rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
                  <div className="h-32 w-full bg-muted/50 rounded border border-border/50 mt-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground">Start for free, scale when you're ready.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard 
            title="Free" 
            price="$0" 
            features={["1 Project", "Basic AI Planning", "Community Support", "Single User"]} 
          />
          <PricingCard 
            title="Startup" 
            price="$99" 
            period="/mo"
            highlight
            features={["Unlimited Projects", "Advanced Code Gen", "Predictive Analytics", "Up to 5 Team Members", "Priority Support"]} 
          />
          <PricingCard 
            title="Enterprise" 
            price="Custom" 
            features={["Unlimited Team", "Private Cloud Deployment", "Custom AI Models", "Dedicated Account Manager", "SLA Guarantee"]} 
          />
        </div>
      </section>

      <footer className="py-12 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xl font-bold">NexusAI</span>
              </div>
              <p className="text-muted-foreground max-w-xs">
                The intelligent platform for modern software development. Build faster, smarter, and cheaper.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary">Features</Link></li>
                <li><Link href="#" className="hover:text-primary">Pricing</Link></li>
                <li><Link href="#" className="hover:text-primary">Enterprise</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary">About</Link></li>
                <li><Link href="#" className="hover:text-primary">Blog</Link></li>
                <li><Link href="#" className="hover:text-primary">Careers</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2026 NexusAI Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-foreground">Privacy</Link>
              <Link href="#" className="hover:text-foreground">Terms</Link>
              <Link href="#" className="hover:text-foreground">Twitter</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PersonaCard({ icon: Icon, role, title, desc }: { icon: any, role: string, title: string, desc: string }) {
  return (
    <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center justify-between mb-6">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon className="h-6 w-6 text-primary group-hover:text-white" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-1 rounded">{role}</span>
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function Step({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
        {number}
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

function PricingCard({ title, price, period, features, highlight }: { title: string, price: string, period?: string, features: string[], highlight?: boolean }) {
  return (
    <div className={`p-8 rounded-2xl border ${highlight ? 'border-primary shadow-2xl bg-primary/5' : 'border-border bg-card'} flex flex-col`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {period && <span className="text-muted-foreground">{period}</span>}
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feat, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            {feat}
          </li>
        ))}
      </ul>
      <Button className={`w-full ${highlight ? 'bg-primary' : 'variant-outline'}`} variant={highlight ? 'default' : 'outline'}>
        {highlight ? 'Get Started' : 'Contact Sales'}
      </Button>
    </div>
  );
}