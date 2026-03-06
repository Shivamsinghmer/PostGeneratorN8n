import { Send } from "lucide-react";

interface EmailInputProps {
    value: string;
    onChange: (value: string) => void;
}

export default function EmailInput({ value, onChange }: EmailInputProps) {
    return (
        <div className="space-y-3">
            <label
                htmlFor="email"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground"
            >
                <Send className="w-3.5 h-3.5 text-secondary" />
                Email Address
            </label>
            <input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary/60 focus:bg-black/10 dark:focus:bg-white/8 focus:ring-2 focus:ring-secondary/20 transition-all duration-300 text-sm"
            />
        </div>
    );
}
