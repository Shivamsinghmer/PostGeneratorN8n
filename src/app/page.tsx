"use client";

import { useState } from "react";
import HeroBadge from "@/components/HeroBadge";
import HeroSection from "@/components/HeroSection";
import TopicInput from "@/components/TopicInput";
import EmailInput from "@/components/EmailInput";
import SubmitButton from "@/components/SubmitButton";
import StatusAlert from "@/components/StatusAlert";
import BackgroundRings from "@/components/BackgroundRings";
import ThemeToggle from "@/components/ThemeToggle";

export default function PostGenerator() {
  const [topic, setTopic] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic || !email) return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: topic, gmail: email }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Your posts are being generated and will be sent to your email shortly.");
        setTopic("");
      } else {
        let errMsg = "Something went wrong. Please try again.";
        try {
          const errData = await response.json();
          if (errData?.error) errMsg = errData.error;
        } catch { /* ignore JSON parse errors */ }
        throw new Error(errMsg);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden flex flex-col items-center justify-center px-4 py-20 sm:px-6 transition-colors duration-500">
      <ThemeToggle />
      <BackgroundRings />
      {/* ── Background Effects ── */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[130px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-secondary/10 blur-[130px] animate-pulse [animation-delay:2s]" />

        {/* Grain overlay for premium texture */}
        <div
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzQnIGZpbGw9JyNmZmYnIGZpbGwtb3BhY2l0eT0nMC4wNScvPjwvc3ZnPg==')" }}
        />
      </div>

      <div className="w-full max-w-[540px] flex flex-col gap-10">
        <HeroBadge />
        <HeroSection />

        <div
          className="relative rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 bg-white/60 dark:bg-black/40 backdrop-blur-xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-primary via-secondary to-accent opacity-60" />

          <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-7">
            <TopicInput value={topic} onChange={setTopic} />
            <EmailInput value={email} onChange={setEmail} />
            <SubmitButton isLoading={status === "loading"} disabled={status === "loading" || !topic || !email} />
            <StatusAlert status={status} message={message} />
          </form>
        </div>
      </div>
    </main>
  );
}
