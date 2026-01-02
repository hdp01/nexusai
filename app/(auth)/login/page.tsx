"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, ArrowLeft } from "lucide-react";
import { login } from "../actions";
import { toast } from "sonner";
import { FadeIn, TiltCard } from "@/components/ui/motion";

export default function LoginPage() {
  async function handleLogin(formData: FormData) {
    const result = await login(formData);
    if (result?.error) toast.error(result.error);
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white overflow-hidden relative">
      <div className="absolute inset-0 -z-10">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-vivid-blue/10 rounded-full blur-[100px] opacity-70 animate-blob" />
         <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-vivid-purple/10 rounded-full blur-[100px] opacity-70 animate-blob animation-delay-4000" />
      </div>

      <FadeIn className="w-full max-w-md p-4 relative z-10">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <TiltCard className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] p-10">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="h-12 w-12 bg-gradient-to-tr from-vivid-blue to-vivid-purple rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-vivid-purple/20">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-black text-slate-900">Welcome back</h1>
            <p className="text-slate-500 mt-2">Enter your credentials to access your workspace</p>
          </div>

          <form action={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label className="text-slate-700 font-semibold">Email</Label>
              <Input 
                name="email" type="email" required 
                className="h-12 bg-white/50 border-slate-200 focus:ring-vivid-purple rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-700 font-semibold">Password</Label>
              <Input 
                name="password" type="password" required 
                className="h-12 bg-white/50 border-slate-200 focus:ring-vivid-purple rounded-xl"
              />
            </div>
            <Button className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-lg font-bold shadow-xl shadow-slate-900/20">
              Sign In
            </Button>
          </form>

          <div className="mt-8 text-center text-sm">
            <span className="text-slate-500">Don't have an account? </span>
            <Link href="/signup" className="text-vivid-purple font-bold hover:underline">
              Sign up free
            </Link>
          </div>
        </TiltCard>
      </FadeIn>
    </div>
  );
}