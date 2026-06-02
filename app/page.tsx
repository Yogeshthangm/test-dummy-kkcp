import { CloneTree } from "./test-dummy-webs-1-react/_components/CloneTree";

export default function Home() {
  return (
    <>
      {/* Verbatim TSX rebuild of /test-dummy-webs-1/index.html — no iframe.
          Source theme stylesheet (scoped under .clone-root) + the Google Fonts
          the source theme uses (Bitter / Roboto). */}
      <link rel="stylesheet" href="/test-dummy-webs-1/clone-theme.css" />
      <link rel="stylesheet" href="/test-dummy-webs-1/clone-fixes.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;600&family=Roboto:wght@400&display=swap"
      />
      <div className="clone-root">
        <CloneTree />
      </div>
    </>
  );
}
