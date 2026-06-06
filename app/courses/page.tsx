import type { Metadata } from "next";
import { CloneHeader } from "@/components/CloneHeader";
import { CloneFooter } from "@/components/CloneFooter";
import { CoursesSection } from "@/components/CoursesSection";

export const metadata: Metadata = { title: "Courses" };

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/about-us/clone-theme.css" />
      <link rel="stylesheet" href="/test-dummy-webs-1/clone-fixes.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;600&family=Roboto:wght@400&display=swap" />
      <div className="clone-root">
        <div id="KKCP-page" className="KKCP-page-wrapper">
          <CloneHeader />
          <main id="KKCP-content" className="KKCP-content-wrapper">
            <CoursesSection showBanner />
          </main>
          <CloneFooter />
        </div>
      </div>
    </>
  );
}
