import { Zap } from "lucide-react";

const SUGGESTIONS = [
    "AI agents",
    "Crypto market",
    "OpenAI news",
    "Bitcoin ETF",
    "Claude AI",
];

interface TopicInputProps {
    value: string;
    onChange: (value: string) => void;
}

export default function TopicInput({ value, onChange }: TopicInputProps) {
    return (
        <div className="space-y-3">
            <label
                htmlFor="topic"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground"
            >
                <Zap className="w-3.5 h-3.5 text-accent" />
                Topic
            </label>

            <div className="relative group">
                <input
                    id="topic"
                    type="text"
                    placeholder="Example: recent dip of crypto market"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:bg-black/10 dark:focus:bg-white/8 focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm"
                />
            </div>

            {/* Suggestion chips */}
            <div className="flex flex-wrap gap-2 pt-0.5">
                {SUGGESTIONS.map((s) => (
                    <button
                        key={s}
                        type="button"
                        onClick={() => onChange(s)}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 active:scale-95 ${value === s
                            ? "bg-primary/20 border-primary/50 text-primary"
                            : "bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-muted-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary"
                            }`}
                    >
                        {s}
                    </button>
                ))}
            </div>
        </div>
    );
}
