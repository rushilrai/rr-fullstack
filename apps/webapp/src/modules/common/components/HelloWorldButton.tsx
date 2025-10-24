"use client";

import { Button } from "@/components/ui/button";

export default function HelloWorldButton() {
  return (
    <Button variant="destructive" onClick={() => window.alert("world")}>
      hello
    </Button>
  );
}
