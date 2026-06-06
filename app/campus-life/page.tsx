import type { Metadata } from "next";
import { CloneHeader } from "@/components/CloneHeader";
import { CloneFooter } from "@/components/CloneFooter";
import { CampusFacilities } from "@/components/CampusFacilities";

export const metadata: Metadata = { title: "Campus" };

export default function CampusLifePage() {
  return (
    <>
      <link rel="stylesheet" href="/campus-life/clone-theme.css" />
      <link rel="stylesheet" href="/test-dummy-webs-1/clone-fixes.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;600&family=Roboto:wght@400&display=swap" />
      <div className="clone-root">
        <CloneHeader />
        <main id="KKCP-content" className="KKCP-content-wrapper">
          <CampusFacilities />
        </main>
        <CloneFooter />
      </div>
    </>
  );
}
