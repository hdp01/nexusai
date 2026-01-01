"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, ArrowLeft } from "lucide-react";
import { signup } from "../actions";
import { toast } from "sonner";
import { FadeIn } from "@/components/ui/motion";

export default function SignupPage() {
  async function handleSignup(formData: FormData) {
    const result = await signup(formData);
    if (result?.error) toast.error(result.error);
    else if (result?.success) toast.success(result.success);
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background overflow-hidden relative">
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] -z-10" />

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
            <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
            <p className="text-sm text-muted-foreground mt-2">
              Start building your next big idea with AI
            </p>
          </div>

          <form action={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" name="fullName" placeholder="John Doe" required className="bg-background/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="name@example.com" required className="bg-background/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required className="bg-background/50" />
            </div>
            <Button className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg shadow-primary/20">
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline font-medium">
              Log in
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}