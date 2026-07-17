import { KkcpTree } from "./_components/KkcpTree";

export default function Page() {
  return (
    <>
      {/* Source theme stylesheets, bundled + scoped under .kkcp-root. Served statically
          (~2.2MB) via <link> rather than imported through the bundler. */}
      <link rel="stylesheet" href="/test-dummy-webs-2/kkcp-theme.css" />
      {/* Google Fonts (Inter) used by the source theme, loaded from CDN like the live site */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Inter:400,500,600,700,800&display=swap"
      />
      <div className="kkcp-root">
        <KkcpTree />
      </div>
    </>
  );
}
