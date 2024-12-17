import { accounts, mails } from "./Data";
import { useState, useEffect } from "react";
import Cookies from "js-cookie"; // Make sure you install the js-cookie library
import { MailComponent } from "./Components/Mail";

export default function Page() {
  const [defaultLayout, setDefaultLayout] = useState(undefined);
  const [defaultCollapsed, setDefaultCollapsed] = useState(undefined);

  useEffect(() => {
    const layout = Cookies.get("react-resizable-panels:layout:mail");
    const collapsed = Cookies.get("react-resizable-panels:collapsed");

    const parsedLayout = layout ? JSON.parse(layout) : undefined;
    const parsedCollapsed = collapsed ? JSON.parse(collapsed) : undefined;

    setDefaultLayout(parsedLayout);
    setDefaultCollapsed(parsedCollapsed);
  }, []);

  return (
    <div className="hidden flex-col md:flex">
      <MailComponent
        accounts={accounts}
        mails={mails}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
      />
    </div>
  );
}
