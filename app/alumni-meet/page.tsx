import type { Metadata } from "next";
import { CloneTree } from "../alumni-meet-react/_components/CloneTree";

export const metadata: Metadata = { title: "Alumni Meet" };

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/all-programs/clone-theme.css" precedence="clone" />
      <link rel="stylesheet" href="/test-dummy-webs-1/clone-fixes.css" precedence="clone" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;600&family=Roboto:wght@400&display=swap" precedence="clone" />
      <div className="clone-root"><CloneTree /></div>
    </>
  );
}
