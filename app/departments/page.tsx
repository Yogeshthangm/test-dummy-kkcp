import type { Metadata } from "next";
import { CloneTree } from "../departments-react/_components/CloneTree";

export const metadata: Metadata = { title: "Student Services" };

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/all-programs/clone-theme.css" />
      <link rel="stylesheet" href="/test-dummy-webs-1/clone-fixes.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;600&family=Roboto:wght@400&display=swap" />
      <div className="clone-root"><CloneTree /></div>
    </>
  );
}
