"use client";

import { motion } from "framer-motion";
import { 
  Zap, Activity, CheckCircle, LayoutDashboard, 
  FolderKanban, Settings, Bell, Search, Plus 
} from "lucide-react";

export function DashboardPreview() {
  return (
    <div className="rounded-xl border border-border/50 bg-background shadow-2xl overflow-hidden">
      {/* 1. Window Controls (Mac style) */}
      <div className="h-10 bg-muted/50 border-b border-border flex items-center px-4 gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
        
        {/* Fake URL Bar */}
        <div className="ml-4 h-6 bg-background/50 rounded-md border border-border/50 flex-1 max-w-sm mx-auto flex items-center justify-center text-[10px] text-muted-foreground font-mono">
          nexusai.app/dashboard
        </div>
      </div>

      {/* 2. Main Interface */}
      <div className="flex h-[500px] md:h-[600px] bg-background">
        
        {/* Sidebar */}
        <div className="w-16 md:w-60 border-r border-border bg-card/50 flex flex-col p-4 hidden sm:flex">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
               <Zap className="h-5 w-5 text-primary" />
            </div>
            <span className="font-bold hidden md:block">NexusAI</span>
          </div>
          
          <div className="space-y-1">
            {[
              { icon: LayoutDashboard, label: "Dashboard", active: true },
              { icon: FolderKanban, label: "Projects" },
              { icon: Activity, label: "Analytics" },
              { icon: Settings, label: "Settings" },
            ].map((item, i) => (
              <div 
                key={i} 
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm cursor-default ${
                  item.active ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="hidden md:block">{item.label}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-auto pt-4 border-t border-border">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
              <div className="hidden md:block">
                <div className="text-sm font-medium">Alex Dev</div>
                <div className="text-xs text-muted-foreground">Pro Plan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <div className="h-16 border-b border-border flex items-center justify-between px-6 bg-background/50 backdrop-blur-sm">
            <h2 className="font-semibold text-lg">Overview</h2>
            <div className="flex items-center gap-4">
               <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center">
                 <Search className="h-4 w-4 text-muted-foreground" />
               </div>
               <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center relative">
                 <Bell className="h-4 w-4 text-muted-foreground" />
                 <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-background" />
               </div>
            </div>
          </div>

          {/* Scrollable Dashboard Content */}
          <div className="p-6 md:p-8 space-y-8 bg-muted/10 flex-1 overflow-hidden relative">
            
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Active Projects", val: "12", icon: FolderKanban, color: "text-blue-500", bg: "bg-blue-500/10" },
                { label: "Tasks Completed", val: "843", icon: CheckCircle, color: "text-green-500", bg: "bg-green-500/10" },
                { label: "Team Velocity", val: "+24%", icon: Activity, color: "text-purple-500", bg: "bg-purple-500/10" },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-xl border border-border bg-card shadow-sm"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-2 rounded-lg ${stat.bg}`}>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold">{stat.val}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Active Project Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="rounded-xl border border-border bg-card shadow-sm p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-semibold text-lg">E-Commerce Platform Redesign</h3>
                  <p className="text-sm text-muted-foreground">Due in 3 days • High Priority</p>
                </div>
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                  <Plus className="h-4 w-4" /> Add Task
                </div>
              </div>

              {/* Fake Kanban / List */}
              <div className="space-y-3">
                 {[1, 2, 3].map((_, i) => (
                   <div key={i} className="flex items-center gap-4 p-3 rounded-lg border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors">
                     <div className={`h-5 w-5 rounded-full border-2 ${i === 0 ? "border-green-500 bg-green-500/20" : "border-muted-foreground/30"}`} />
                     <div className="h-3 bg-muted-foreground/20 rounded w-1/3" />
                     <div className="h-6 w-16 ml-auto bg-primary/10 rounded-full" />
                   </div>
                 ))}
              </div>
            </motion.div>

            {/* Abstract Floating Gradient Overlay for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
}