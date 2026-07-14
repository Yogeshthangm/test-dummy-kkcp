import type { Metadata } from "next";
import { CloneTree } from "../testimonials-react/_components/CloneTree";

export const metadata: Metadata = { title: "Testimonials" };

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/all-programs/clone-theme.css" />
      <link rel="stylesheet" href="/test-dummy-webs-1/clone-fixes.css" />
      <link rel="stylesheet" href="/kkcp/enhance.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;600;700&family=Roboto:wght@400;500;700&display=swap" />
      <div className="clone-root"><CloneTree /></div>
    </>
  );
}
