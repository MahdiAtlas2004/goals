import { type ReactNode } from "react";

type InfoBoxProps = {
  // Using literal combined by union type to accept only specifc strings, not every string.
  mode: "hint" | "warning";
  // The ? mark after severity type tells that the severty type in InfoBoxProps type is optional.
  // This is a special typescript syntax that helps us to set types that can be ignored.
  severity?: "low" | "medium" | "high";
  children: ReactNode;
};

export default function InfoBox({ mode, severity, children }: InfoBoxProps) {
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
