"use client";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";
import { Button } from "@/ui/components/ui/button";

export default function Home() {
  const samples = useQuery(api.modules.sample.queries.getAllSamples);

  const handleClick = () => {
    window.alert(samples?.length + " samples");
  }

  return (
    <main className="flex flex-col gap-1 items-center justify-center h-screen w-screen">
      <h1 className="text-4xl font-bold">RR-Fullstack</h1>
      <Button onClick={handleClick}>Click Me</Button>
    </main>
  );
}
