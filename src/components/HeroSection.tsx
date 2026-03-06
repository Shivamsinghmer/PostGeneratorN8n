"use client";


const PLATFORMS = [
    { name: "LinkedIn", color: "#0077B5", emoji: "💼" },
    { name: "X / Twitter", color: "#1DA1F2", emoji: "𝕏" },
    { name: "Instagram", color: "#E4405F", emoji: "📸" },
];

export default function HeroSection() {
    return (
        <div className="relative text-center space-y-4">
            <h1
                className="leading-none tracking-wide uppercase"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(3.5rem, 12vw, 6rem)" }}
            >
                <span className="block bg-gradient-to-br dark:from-white dark:via-white/90 dark:to-white/40 from-black via-black/80 to-black/50 bg-clip-text text-transparent">
                    AI Post
                </span>
                <span
                    className="block bg-clip-text text-transparent"
                    style={{
                        backgroundImage:
                            "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 60%, var(--accent) 100%)",
                    }}
                >
                    Generator
                </span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-[420px] mx-auto">
                Generate viral{" "}
                <span className="text-foreground font-semibold">LinkedIn</span>,{" "}
                <span className="text-foreground font-semibold">X</span>, and{" "}
                <span className="text-foreground font-semibold">Instagram</span>{" "}
                posts using the latest AI &amp; crypto news.
                <span className="block mt-2 font-medium text-primary">
                    Delivered directly to your inbox in seconds.
                </span>
            </p>

            {/* Platform badges */}
            <div className="flex items-center justify-center gap-3 pt-3">
                {PLATFORMS.map((p) => (
                    <span
                        key={p.name}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{
                            backgroundColor: `${p.color}20`,
                            color: p.color,
                            border: `1px solid ${p.color}40`,
                        }}
                    >
                        {p.emoji} {p.name}
                    </span>
                ))}
            </div>
        </div>
    );
}
