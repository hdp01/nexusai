import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/features/dashboard/ProjectCard";
import { Plus, Zap, Activity, CheckCircle } from "lucide-react";

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
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-slate-500 mt-2">
            Welcome back. Here's what's happening with your projects.
          </p>
        </div>
        <Link href="/dashboard/projects/new">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </Link>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="p-6 bg-white rounded-xl border shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Active Projects</p>
              <h3 className="text-2xl font-bold">{projectCount}</h3>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-xl border shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg">
              <CheckCircle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Tasks Completed</p>
              <h3 className="text-2xl font-bold">0</h3>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
              <Activity className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Team Velocity</p>
              <h3 className="text-2xl font-bold">0%</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Projects</h2>
        
        {projectCount === 0 ? (
          // Empty State
          <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-xl bg-slate-50/50">
            <div className="p-4 bg-slate-100 rounded-full mb-4">
              <Zap className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-900">No projects yet</h3>
            <p className="text-slate-500 mb-6 text-center max-w-sm">
              Use our AI project planner to turn your idea into a complete roadmap in seconds.
            </p>
            <Link href="/dashboard/projects/new">
              <Button>Create your first project</Button>
            </Link>
          </div>
        ) : (
          // Grid of Projects
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}