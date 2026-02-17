type LoaderProps = {
    text?: string;
    className?: string;
    spinnerClassName?: string;
};

export function Loader({
    text = "Loading...",
    className,
    spinnerClassName,
}: LoaderProps) {
    return (
        <div className={["flex items-center justify-center py-12", className].filter(Boolean).join(" ")}>
            <div className="flex flex-col items-center gap-4">
                <div
                    className={[
                        "w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin",
                        spinnerClassName,
                    ]
                        .filter(Boolean)
                        .join(" ")}
                />
                <p className="text-gray-400 text-lg">{text}</p>
            </div>
        </div>
    );
}
