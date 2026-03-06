import { Loader2, Sparkles } from "lucide-react";

interface SubmitButtonProps {
    isLoading: boolean;
    disabled: boolean;
}

export default function SubmitButton({ isLoading, disabled }: SubmitButtonProps) {
    return (
        <button
            type="submit"
            disabled={disabled}
            className="w-full relative group overflow-hidden rounded-xl py-4 px-6 font-bold text-sm uppercase tracking-widest transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98] cursor-pointer"
            style={{
                backgroundImage: isLoading
                    ? "linear-gradient(135deg, #5b52f0, #2dcfbe)"
                    : "linear-gradient(135deg, var(--primary), var(--secondary))",
                color: "var(--primary-foreground)",
                boxShadow: !isLoading
                    ? "0 4px 24px -4px rgba(129,140,248,0.5)"
                    : undefined,
            }}
        >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-in-out" />
            <span className="relative flex items-center justify-center gap-2.5">
                {isLoading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing…
                    </>
                ) : (
                    <>
                        <Sparkles className="w-4.5 h-4.5" />
                        Get Posts
                    </>
                )}
            </span>
        </button>
    );
}
