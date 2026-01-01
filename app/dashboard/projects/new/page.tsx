import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function NewProjectPage() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Create New Project</h1>
        <p className="text-slate-500">How would you like to start?</p>
      </div>

      <div className="grid gap-6">
        {/* Option 1: AI Generation */}
        <Card className="cursor-pointer hover:border-blue-500 transition-colors border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-500" />
              AI Project Generator
            </CardTitle>
            <CardDescription>
              Describe your idea in plain English and let AI build your plan, features, and tech stack.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Start with AI</Button>
          </CardContent>
        </Card>

        {/* Option 2: Manual (Placeholder for now) */}
        <Card className="opacity-60">
          <CardHeader>
            <CardTitle>Manual Setup</CardTitle>
            <CardDescription>
              Start from scratch and configure everything manually.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" disabled>Coming Soon</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}