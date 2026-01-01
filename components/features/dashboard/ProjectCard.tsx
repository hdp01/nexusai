import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

// Define the shape of our project data
interface Project {
  id: string;
  name: string;
  description: string | null;
  status: string;
  updated_at: string;
}

export function ProjectCard({ project }: { project: Project }) {
  // Simple status color mapping
  const statusColors: Record<string, string> = {
    planning: "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20",
    active: "bg-green-500/10 text-green-500 hover:bg-green-500/20",
    completed: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
  };

  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="truncate pr-4">{project.name}</CardTitle>
          <Badge variant="secondary" className={statusColors[project.status] || ""}>
            {project.status}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2 min-h-[2.5rem]">
          {project.description || "No description provided."}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1">
        <div className="flex items-center text-sm text-slate-500">
          <Clock className="mr-2 h-4 w-4" />
          <span>Last updated: {new Date(project.updated_at).toLocaleDateString()}</span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Link href={`/dashboard/projects/${project.id}`} className="w-full">
          <Button variant="outline" className="w-full group">
            Open Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}