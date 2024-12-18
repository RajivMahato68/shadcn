import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { siteConfig } from "../../../config/Site";
import { cn } from "@/lib/utils";
import { Icons } from "./Icons";

export function MainNav() {
  const location = useLocation();

  return (
    <div className="mr-4 hidden md:flex">
      <Link to="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          to="/about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            location.pathname === "/about"
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Docs
        </Link>
        <Link
          to="/blog"
          className={cn(
            "transition-colors hover:text-foreground/80",
            location.pathname?.startsWith("/blog")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Components
        </Link>
        <Link
          to="/contract"
          className={cn(
            "transition-colors hover:text-foreground/80",
            location.pathname === "/contract"
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Blocks
        </Link>
        <Link
          to="/dashboard"
          className={cn(
            "transition-colors hover:text-foreground/80",
            location.pathname?.startsWith("/dashboard")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Charts
        </Link>
        <Link
          to="/mail"
          className={cn(
            "transition-colors hover:text-foreground/80",
            location.pathname === "/mail"
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Mail
        </Link>
        <Link
          to="/colors"
          className={cn(
            "transition-colors hover:text-foreground/80",
            location.pathname?.startsWith("/colors")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Colors
        </Link>
      </nav>
    </div>
  );
}
