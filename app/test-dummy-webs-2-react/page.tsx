import { CloneTree } from "./_components/CloneTree";

export default function Page() {
  return (
    <>
      {/* Source theme stylesheets, bundled + scoped under .clone-root. Served statically
          (~2.2MB) via <link> rather than imported through the bundler. */}
      <link rel="stylesheet" href="/test-dummy-webs-2/clone-theme.css" precedence="clone" />
      {/* Google Fonts (Inter) used by the source theme, loaded from CDN like the live site */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Inter:400,500,600,700,800&display=swap"
        precedence="clone"
      />
      <div className="clone-root">
        <CloneTree />
      </div>
    </>
  );
}
