import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useMetaColor } from "@/hooks/UseMetaColor";
import { Button } from "@/Components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/Components/ui/drawer";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { setMetaColor, metaColor } = useMetaColor();

  // Define docsConfig inside the component
  const docsConfig = {
    mainNav: [
      { title: "Home", href: "/" },
      { title: "Docs", href: "/about" },
      { title: "Components", href: "/blog" },
      { title: "Blocks", href: "/contract" },
      { title: "Charts", href: "/dashboard" },
      { title: "Mail", href: "/mail" },
      { title: "Colors", href: "/colors" },
    ],
  };

  const onOpenChange = useCallback(
    (open) => {
      setOpen(open);
      setMetaColor(open ? "#09090b" : metaColor);
    },
    [setMetaColor, metaColor]
  );

  return (
    <Drawer open={open} onOpenChange={onOpenChange} placement="left">
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="-ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="!size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-0">
        <div className="overflow-auto p-6">
          <div className="flex flex-col space-y-3">
            {docsConfig.mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    {item.title}
                  </MobileLink>
                )
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function MobileLink({ href, onOpenChange, className, children, ...props }) {
  const navigate = useNavigate();

  return (
    <Link
      to={href}
      onClick={() => {
        navigate(href);
        if (onOpenChange) onOpenChange(false);
      }}
      className={cn("text-base", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
