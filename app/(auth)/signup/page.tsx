"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, ArrowLeft } from "lucide-react";
import { signup } from "../actions";
import { toast } from "sonner";
import { FadeIn, TiltCard } from "@/components/ui/motion";

export default function SignupPage() {
  async function handleSignup(formData: FormData) {
    const result = await signup(formData);
    if (result?.error) toast.error(result.error);
    else if (result?.success) toast.success(result.success);
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white overflow-hidden relative">
      <div className="absolute inset-0 -z-10">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-vivid-pink/10 rounded-full blur-[120px] opacity-60 animate-blob" />
      </div>

      <FadeIn className="w-full max-w-md p-4 relative z-10">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <TiltCard className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] p-10">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="h-12 w-12 bg-gradient-to-tr from-vivid-pink to-vivid-orange rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-vivid-orange/20">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-black text-slate-900">Create Account</h1>
            <p className="text-slate-500 mt-2">Start building your next big idea</p>
          </div>

          <form action={handleSignup} className="space-y-5">
            <div className="space-y-2">
              <Label className="text-slate-700 font-semibold">Full Name</Label>
              <Input name="fullName" required className="h-12 bg-white/50 border-slate-200 rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-700 font-semibold">Email</Label>
              <Input name="email" type="email" required className="h-12 bg-white/50 border-slate-200 rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-700 font-semibold">Password</Label>
              <Input name="password" type="password" required className="h-12 bg-white/50 border-slate-200 rounded-xl" />
            </div>
            <Button className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-lg font-bold shadow-xl shadow-slate-900/20">
              Create Account
            </Button>
          </form>

          <div className="mt-8 text-center text-sm">
            <span className="text-slate-500">Already have an account? </span>
            <Link href="/login" className="text-vivid-pink font-bold hover:underline">
              Log in
            </Link>
          </div>
        </TiltCard>
      </FadeIn>
    </div>
  );
}