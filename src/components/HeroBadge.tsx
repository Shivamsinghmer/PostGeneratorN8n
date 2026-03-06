import { Sparkles } from "lucide-react";

export default function HeroBadge() {
    return (
        <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                AI-Powered Content
                <Sparkles className="w-3.5 h-3.5 animate-pulse [animation-delay:0.5s]" />
            </div>
        </div>
    );
}
