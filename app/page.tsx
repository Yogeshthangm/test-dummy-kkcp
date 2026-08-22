import { KkcpTree } from "./test-dummy-webs-1-react/_components/KkcpTree";

export default function Home() {
  return (
    <>
      {/* Verbatim TSX rebuild of /test-dummy-webs-1/index.html — no iframe.
          Source theme stylesheet (scoped under .kkcp-root) + the Google Fonts
          the source theme uses (Bitter / Roboto). */}
      <link rel="stylesheet" href="/test-dummy-webs-1/kkcp-theme.css" />
      <link rel="stylesheet" href="/test-dummy-webs-1/kkcp-fixes.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;600&family=Roboto:wght@400&display=swap"
      />
      <div className="kkcp-root">
        <KkcpTree />
      </div>
    </>
  );
}
