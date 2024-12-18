import { Link } from "react-router-dom";
import { siteConfig } from "../../../config/Site";
import { CommandMenu } from "./CommandMenu";
import { Icons } from "./Icons";
import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";
import { ModeToggle } from "../ModeToggle";
import { Button } from "@/Components/ui/button";
import { ThemeProvider } from "../ThemeProvider";

export function SiteHeader() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          <MainNav />
          <MobileNav />
          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <CommandMenu />
            </div>
            <nav className="flex items-center gap-0.5">
              <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.gitHub className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <ModeToggle />
              </ThemeProvider>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
