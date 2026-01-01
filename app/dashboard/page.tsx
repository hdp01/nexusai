import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/features/dashboard/ProjectCard";
import { FadeIn, ScaleIn } from "@/components/ui/motion"; // Import our animations
import { Plus, Zap, Activity, CheckCircle, ArrowUpRight } from "lucide-react";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("owner_id", user?.id)
    .order("updated_at", { ascending: false });

  const projectCount = projects?.length || 0;

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Animated Header */}
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6 bg-gradient-to-r from-transparent via-transparent to-transparent">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
            <p className="text-slate-500 mt-1">
              Overview of your AI-orchestrated projects.
            </p>
          </div>
          <Link href="/dashboard/projects/new">
            <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all hover:scale-105">
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </Link>
        </div>
      </FadeIn>

      {/* Metrics Grid with Staggered Animation */}
      <div className="grid gap-4 md:grid-cols-3">
        <ScaleIn delay={0.1}>
          <div className="p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100/50 text-blue-600 rounded-lg">
                <Zap className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full flex items-center">
                +12% <ArrowUpRight className="h-3 w-3 ml-1" />
              </span>
            </div>
            <p className="text-sm font-medium text-slate-500">Active Projects</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-1">{projectCount}</h3>
          </div>
        </ScaleIn>
        
        <ScaleIn delay={0.2}>
          <div className="p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
             <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-emerald-100/50 text-emerald-600 rounded-lg">
                <CheckCircle className="h-5 w-5" />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-500">Tasks Completed</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-1">0</h3>
          </div>
        </ScaleIn>

        <ScaleIn delay={0.3}>
          <div className="p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
             <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-100/50 text-purple-600 rounded-lg">
                <Activity className="h-5 w-5" />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-500">Velocity</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-1">0%</h3>
          </div>
        </ScaleIn>
      </div>

      {/* Projects List */}
      <FadeIn delay={0.4}>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">Recent Projects</h2>
          
          {projectCount === 0 ? (
            <div className="flex flex-col items-center justify-center p-12 border border-dashed border-slate-300 rounded-2xl bg-slate-50/50 hover:bg-slate-50 transition-colors group cursor-pointer">
              <div className="p-4 bg-white rounded-full mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-medium text-slate-900">No projects yet</h3>
              <p className="text-slate-500 mb-6 text-center max-w-sm">
                Start your first AI-powered development journey.
              </p>
              <Link href="/dashboard/projects/new">
                <Button variant="outline">Create Project</Button>
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects?.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </FadeIn>
    </div>
  );
}