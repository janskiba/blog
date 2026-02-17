type ErrorStateProps = {
    message: string;
    title?: string;
    className?: string;      // wrapper
    cardClassName?: string;  // pudełko errora
};

export function ErrorCard({
    message,
    title,
    className,
    cardClassName,
}: ErrorStateProps) {
    return (
        <div className={["flex items-center justify-center py-12", className].filter(Boolean).join(" ")}>
            <div
                role="alert"
                className={[
                    "bg-red-500/10 border border-red-500/50 rounded-lg p-6 max-w-md w-full",
                    cardClassName,
                ]
                    .filter(Boolean)
                    .join(" ")}
            >
                {title && <p className="text-red-200 font-medium mb-2">{title}</p>}
                <p className="text-red-400">{message}</p>
            </div>
        </div>
    );
}
