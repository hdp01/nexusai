"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Intelligent", "Automated", "Predictive", "Effortless", "Scalable"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-10 lg:py-20 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4 rounded-full h-8 px-4 bg-vivid-purple/10 text-vivid-purple hover:bg-vivid-purple/20 border border-vivid-purple/20">
              NexusAI v2.0 is Live <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-regular">
              <span className="text-slate-900 font-black">Software Development,</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-black bg-gradient-to-r from-vivid-blue via-vivid-purple to-vivid-pink bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-slate-500 max-w-2xl text-center mx-auto">
              Stop fighting with Jira and boilerplate code. NexusAI acts as your 
              <span className="font-bold text-slate-700"> CTO, PM, and Senior Dev</span> rolled into one platform.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Link href="/signup">
                <Button size="lg" className="gap-4 h-14 rounded-full text-lg bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/20">
                Start Building <MoveRight className="w-4 h-4" />
                </Button>
            </Link>
            <Link href="/login">
                <Button size="lg" className="gap-4 h-14 rounded-full text-lg bg-white border border-slate-200 text-slate-900 hover:bg-slate-50" variant="outline">
                View Demo <Play className="w-4 h-4" />
                </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };