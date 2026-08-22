import type { Metadata } from "next";
import { KkcpTree } from "../alumni-meet-react/_components/KkcpTree";

export const metadata: Metadata = { title: "Alumni Meet" };

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/all-programs/kkcp-theme.css" />
      <link rel="stylesheet" href="/test-dummy-webs-1/kkcp-fixes.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;600&family=Roboto:wght@400&display=swap" />
      <div className="kkcp-root"><KkcpTree /></div>
    </>
  );
}
