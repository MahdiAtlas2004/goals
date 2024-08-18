import { type ReactNode } from "react";

// Using Discriminated union feature for situations that a component has different props on different situations.
// The mode property is the identification property between these types right now.
type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  children: ReactNode;
  severity: "low" | "medium" | "high";
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
