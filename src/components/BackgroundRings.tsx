import { Linkedin, Instagram, LucideTwitter } from "lucide-react";

interface RingGroupProps {
    position: "top-right" | "bottom-left";
}

function RingGroup({ position }: RingGroupProps) {
    const isTopRight = position === "top-right";

    // Speeds: Inner (18% radius) - 15s (fastest), Middle (30% radius) - 25s (fast), Outer (42% radius) - 40s (slow)
    const spin1 = isTopRight ? "animate-[spin_15s_linear_infinite]" : "animate-[spin_15s_linear_infinite_reverse]";
    const revSpin1 = isTopRight ? "animate-[spin_15s_linear_infinite_reverse]" : "animate-[spin_15s_linear_infinite]";

    const spin2 = isTopRight ? "animate-[spin_25s_linear_infinite]" : "animate-[spin_25s_linear_infinite_reverse]";
    const revSpin2 = isTopRight ? "animate-[spin_25s_linear_infinite_reverse]" : "animate-[spin_25s_linear_infinite]";

    const spin3 = isTopRight ? "animate-[spin_40s_linear_infinite]" : "animate-[spin_40s_linear_infinite_reverse]";
    const revSpin3 = isTopRight ? "animate-[spin_40s_linear_infinite_reverse]" : "animate-[spin_40s_linear_infinite]";

    return (
        <div
            className={`absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] opacity-100 ${isTopRight
                ? 'top-0 right-0 translate-x-[50%] -translate-y-[50%]'
                : 'bottom-0 left-0 -translate-x-[50%] translate-y-[50%]'
                }`}
        >
            <svg viewBox="0 0 100 100" className={`w-full h-full absolute inset-0 text-black/50 dark:text-white/50 ${spin3}`}>
                <circle cx="50" cy="50" r="21" fill="none" stroke="currentColor" strokeWidth="0.15" strokeDasharray="1 1.5" />
                <circle cx="50" cy="50" r="33" fill="none" stroke="currentColor" strokeWidth="0.15" strokeDasharray="1 1.5" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.15" strokeDasharray="1 1.5" />
            </svg>

            {/* Ring 1 - Radius 21% (Inner) - Fastest */}
            <div className={`w-full h-full absolute inset-0 ${spin1}`}>
                <div className="absolute left-[50%] top-[29%] -translate-x-1/2 -translate-y-1/2">
                    <div className={`bg-background border border-black/10 dark:border-white/20 rounded-full p-2.5 flex items-center justify-center shadow-md dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] ${revSpin1}`}>
                        <LucideTwitter className="w-4 h-4 text-foreground" />
                    </div>
                </div>
                <div className="absolute left-[50%] top-[71%] -translate-x-1/2 -translate-y-1/2">
                    <div className={`bg-background border border-black/10 dark:border-white/20 rounded-full p-3 flex items-center justify-center shadow-md dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] ${revSpin1}`}>
                        <Instagram className="w-5 h-5 text-foreground" />
                    </div>
                </div>
                <div className="absolute left-[50%] top-[5%] -translate-x-1/2 -translate-y-1/2">
                    <div className={`bg-background border border-black/5 dark:border-white/10 rounded-full p-2 flex items-center justify-center ${revSpin1}`}>
                        <div className="w-2 h-2 bg-black/40 dark:bg-white/80 rounded-full" />
                    </div>
                </div>
            </div>

            {/* Ring 2 - Radius 33% (Middle) - Fast */}
            <div className={`w-full h-full absolute inset-0 ${spin2}`}>
                <div className="absolute left-[17%] top-[50%] -translate-x-1/2 -translate-y-1/2">
                    <div className={`bg-background border border-black/10 dark:border-white/20 rounded-full p-3 flex items-center justify-center shadow-md dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] ${revSpin2}`}>
                        <Linkedin className="w-5 h-5 text-foreground" />
                    </div>
                </div>
                <div className="absolute left-[83%] top-[50%] -translate-x-1/2 -translate-y-1/2">
                    <div className={`bg-background border border-black/10 dark:border-white/20 rounded-full p-2.5 flex items-center justify-center shadow-md dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] ${revSpin2}`}>
                        <LucideTwitter className="w-4 h-4 text-foreground" />
                    </div>
                </div>
                <div className="absolute left-[50%] top-[5%] -translate-x-1/2 -translate-y-1/2">
                    <div className={`bg-background border border-black/5 dark:border-white/10 rounded-full p-2 flex items-center justify-center ${revSpin2}`}>
                        <div className="w-2 h-2 bg-black/40 dark:bg-white/80 rounded-full" />
                    </div>
                </div>
            </div>

            {/* Ring 3 - Radius 45% (Outer) */}
            <div className={`w-full h-full absolute inset-0 ${spin3}`}>
                <div className="absolute left-[50%] top-[95%] -translate-x-1/2 -translate-y-1/2">
                    <div className={`bg-background border border-black/10 dark:border-white/20 rounded-full p-3 flex items-center justify-center shadow-md dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] ${revSpin3}`}>
                        <Instagram className="w-5 h-5 text-foreground" />
                    </div>
                </div>
                <div className="absolute left-[5%] top-[50%] -translate-x-1/2 -translate-y-1/2">
                    <div className={`bg-background border border-black/10 dark:border-white/20 rounded-full p-3 flex items-center justify-center shadow-md dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] ${revSpin3}`}>
                        <Linkedin className="w-5 h-5 text-foreground" />
                    </div>
                </div>
                <div className="absolute left-[50%] top-[5%] -translate-x-1/2 -translate-y-1/2">
                    <div className={`bg-background border border-black/5 dark:border-white/10 rounded-full p-2 flex items-center justify-center ${revSpin3}`}>
                        <div className="w-2 h-2 bg-black/40 dark:bg-white/80 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function BackgroundRings() {
    return (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
            <RingGroup position="top-right" />
            <RingGroup position="bottom-left" />
        </div>
    );
}
