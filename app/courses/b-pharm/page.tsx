import type { Metadata } from "next";
import { CloneTree } from "../../b-pharm-react/_components/CloneTree";
import { TabsActivator } from "../../b-pharm-react/_components/TabsActivator";

export const metadata: Metadata = { title: "B.Pharm" };

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/program-med/clone-theme.css" precedence="clone" />
      <link rel="stylesheet" href="/test-dummy-webs-1/clone-fixes.css" precedence="clone" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;600&family=Roboto:wght@400&display=swap" precedence="clone" />
      <div className="clone-root"><CloneTree /><TabsActivator /></div>
    </>
  );
}
