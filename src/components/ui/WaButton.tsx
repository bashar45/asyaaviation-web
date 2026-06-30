import { MessageCircle, ArrowRight } from "lucide-react";

export default function WaButton({
  href,
  children,
  variant = "primary",
  icon = "whatsapp",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light";
  icon?: "whatsapp" | "arrow";
}) {
  const styles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-accent shadow-sm hover:shadow-md",
    outline:
      "border border-border text-primary hover:border-accent hover:text-accent bg-white",
    light:
      "bg-white text-primary hover:bg-white/90 shadow-sm",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 ${styles[variant]}`}
    >
      {icon === "whatsapp" ? (
        <MessageCircle className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" aria-hidden />
      ) : null}
      {children}
      {icon === "arrow" && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
      )}
    </a>
  );
}
