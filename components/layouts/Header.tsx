import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export function Header() {
  return (
    <header className="h-16 border-b bg-white/50 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-10">
      <h2 className="text-lg font-semibold text-slate-800">Overview</h2>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5 text-slate-500" />
        </Button>
        <div className="h-8 w-8 rounded-full bg-slate-200 border border-slate-300">
          {/* Avatar placeholder */}
        </div>
      </div>
    </header>
  );
}