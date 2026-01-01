"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, ArrowLeft } from "lucide-react";
import { login } from "../actions";
import { toast } from "sonner";
import { FadeIn } from "@/components/ui/motion";

export default function LoginPage() {
  async function handleLogin(formData: FormData) {
    const result = await login(formData);
    if (result?.error) toast.error(result.error);
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background overflow-hidden relative">
      {/* Abstract Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -z-10" />

      <FadeIn className="w-full max-w-md p-4">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="bg-card/50 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl p-8">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="bg-primary/10 p-3 rounded-xl mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground mt-2">
              Enter your credentials to access your workspace
            </p>
          </div>

          <form action={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="name@example.com" 
                required 
                className="bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="text-xs text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                name="password" 
                type="password" 
                required 
                className="bg-background/50"
              />
            </div>
            <Button className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg shadow-primary/20">
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline font-medium">
              Sign up free
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}