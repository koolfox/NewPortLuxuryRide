import { ReactNode } from "react";
import Section from "../section/section";
import Navbar from "./navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Section>
        <div className="flex flex-row font-semibold">
          <div className="basis-1/4">someemail@sometest.com</div>
          <div className="basis-1/4">+1 (323) 1234567</div>
          <div className="basis-1/2 text-right">Social Media</div>
        </div>
        <Navbar />
      </Section>
      <main>{children}</main>
    </>
  );
}
