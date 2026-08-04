import { CloneTree } from "./test-dummy-webs-1-react/_components/CloneTree";

export default function Home() {
  return (
    <>
      {/* Verbatim TSX rebuild of /test-dummy-webs-1/index.html — no iframe.
          Source theme stylesheet (scoped under .clone-root) + the Google Fonts
          the source theme uses (Bitter / Roboto).

          `precedence` is load-bearing, not decoration: it makes React 19 hoist
          these as managed stylesheet resources (matched by href, deduped) instead
          of hydrating them as ordinary host nodes. Plain <link> nodes get
          attribute-diffed on hydration, so any dark-mode browser extension that
          tags stylesheet links mid-parse triggers a hydration mismatch here.
          Sharing one precedence value keeps the three in source order. */}
      <link
        rel="stylesheet"
        href="/test-dummy-webs-1/clone-theme.css"
        precedence="clone"
      />
      <link
        rel="stylesheet"
        href="/test-dummy-webs-1/clone-fixes.css"
        precedence="clone"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;600&family=Roboto:wght@400&display=swap"
        precedence="clone"
      />
      <div className="clone-root">
        <CloneTree />
      </div>
    </>
  );
}
