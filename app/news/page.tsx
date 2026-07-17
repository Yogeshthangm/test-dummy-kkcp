import type { Metadata } from "next";
import { KkcpTree } from "../news-react/_components/KkcpTree";

export const metadata: Metadata = { title: "News" };

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/all-programs/kkcp-theme.css" />
      <link rel="stylesheet" href="/test-dummy-webs-1/kkcp-fixes.css" />
      <link rel="stylesheet" href="/kkcp/enhance.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;600;700&family=Roboto:wght@400;500;700&display=swap" />
      <div className="kkcp-root"><KkcpTree /></div>
    </>
  );
}
