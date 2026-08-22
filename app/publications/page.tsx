import type { Metadata } from "next";
import { KkcpTree } from "../publications-react/_components/KkcpTree";

export const metadata: Metadata = { title: "Publications" };

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/research/kkcp-theme.css" />
      <link rel="stylesheet" href="/test-dummy-webs-1/kkcp-fixes.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;600&family=Roboto:wght@400&display=swap" />
      <div className="kkcp-root"><KkcpTree /></div>
    </>
  );
}
