import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/features/dashboard/ProjectCard";
import { FadeIn, ScaleIn } from "@/components/ui/motion";
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
    <div className="space-y-10 max-w-7xl mx-auto">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900">Dashboard</h1>
            <p className="text-slate-500 mt-2 text-lg">
              Overview of your intelligent workspace.
            </p>
          </div>
          <Link href="/dashboard/projects/new">
            <Button className="bg-slate-900 hover:bg-slate-800 h-12 px-6 rounded-xl shadow-xl shadow-slate-900/20 hover:scale-105 transition-all">
              <Plus className="mr-2 h-5 w-5" />
              New Project
            </Button>
          </Link>
        </div>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-3">
        <ScaleIn delay={0.1}>
          <div className="p-8 bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all group">
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-vivid-blue/10 text-vivid-blue rounded-2xl group-hover:bg-vivid-blue group-hover:text-white transition-colors">
                <Zap className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full flex items-center">
                +12% <ArrowUpRight className="h-3 w-3 ml-1" />
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Active Projects</p>
            <h3 className="text-4xl font-black text-slate-900 mt-2">{projectCount}</h3>
          </div>
        </ScaleIn>
        
        <ScaleIn delay={0.2}>
          <div className="p-8 bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all group">
             <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-vivid-pink/10 text-vivid-pink rounded-2xl group-hover:bg-vivid-pink group-hover:text-white transition-colors">
                <CheckCircle className="h-6 w-6" />
              </div>
            </div>
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Tasks Done</p>
            <h3 className="text-4xl font-black text-slate-900 mt-2">0</h3>
          </div>
        </ScaleIn>

        <ScaleIn delay={0.3}>
          <div className="p-8 bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all group">
             <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-vivid-purple/10 text-vivid-purple rounded-2xl group-hover:bg-vivid-purple group-hover:text-white transition-colors">
                <Activity className="h-6 w-6" />
              </div>
            </div>
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Velocity</p>
            <h3 className="text-4xl font-black text-slate-900 mt-2">0%</h3>
          </div>
        </ScaleIn>
      </div>

      <FadeIn delay={0.4}>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Recent Projects</h2>
          
          {projectCount === 0 ? (
            <div className="flex flex-col items-center justify-center p-16 border-2 border-dashed border-slate-200 rounded-[2.5rem] bg-slate-50/50 hover:bg-white transition-all group">
              <div className="p-6 bg-white rounded-full mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-10 w-10 text-vivid-blue" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No projects yet</h3>
              <p className="text-slate-500 mb-8 text-center max-w-sm">
                Start your first AI-powered development journey.
              </p>
              <Link href="/dashboard/projects/new">
                <Button variant="outline" className="h-12 px-8 rounded-xl border-slate-300">Create Project</Button>
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