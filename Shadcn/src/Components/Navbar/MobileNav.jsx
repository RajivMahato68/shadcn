import React, { useState, useCallback } from "react";
import { Button } from "@/Components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/Components/ui/drawer";
import { docsConfig } from "../../../config/Docs";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const onOpenChange = useCallback((open) => {
    setOpen(open);
  }, []);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
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
      <DrawerContent className="max-h-[60svh] p-0">
        <div className="overflow-auto p-6">
          <div className="flex flex-col space-y-3">
            {docsConfig.mainNav.map((item) =>
              item.href ? (
                <MobileLink
                  key={item.href}
                  href={item.href}
                  onOpenChange={setOpen}
                >
                  {item.title}
                </MobileLink>
              ) : null
            )}
          </div>
          <div className="flex flex-col space-y-2">
            {docsConfig.sidebarNav.map((category, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">{category.title}</h4>
                {category.items.map((item) => (
                  <React.Fragment key={item.href}>
                    {!item.disabled &&
                      (item.href ? (
                        <MobileLink
                          href={item.href}
                          onOpenChange={setOpen}
                          className="text-muted-foreground"
                        >
                          {item.title}
                          {item.label && (
                            <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                              {item.label}
                            </span>
                          )}
                        </MobileLink>
                      ) : (
                        item.title
                      ))}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function MobileLink({ href, onOpenChange, className, children }) {
  const handleClick = () => {
    window.location.href = href;
    onOpenChange(false);
  };

  return (
    <a href={href} onClick={handleClick} className={`text-base ${className}`}>
      {children}
    </a>
  );
}
