import { CheckCircle2, AlertCircle } from "lucide-react";

interface StatusAlertProps {
    status: "idle" | "loading" | "success" | "error";
    message: string;
}

export default function StatusAlert({ status, message }: StatusAlertProps) {
    if (status === "success") {
        return (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/10 border border-secondary/25 animate-in fade-in zoom-in-95 duration-300">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/90 leading-relaxed">{message}</p>
            </div>
        );
    }

    if (status === "error") {
        return (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/25 animate-in fade-in zoom-in-95 duration-300">
                <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/90">{message}</p>
            </div>
        );
    }

    return null;
}
