import { CloneTree } from "./_components/CloneTree";

export default function Page() {
  return (
    <>
      {/* Source theme stylesheets, bundled + scoped under .clone-root. Served statically
          (1.2MB) via <link> rather than imported through the bundler. */}
      <link rel="stylesheet" href="/test-dummy-webs-1/clone-theme.css" precedence="clone" />
      {/* Google Fonts used by the source theme (Bitter / Roboto), loaded from CDN like the live site */}
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
