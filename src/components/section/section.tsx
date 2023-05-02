import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return <div className="xl:mx-64 mx-16">{children}</div>;
}
