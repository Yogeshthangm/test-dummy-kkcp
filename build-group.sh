#!/bin/bash
# Build many KKCP pages from one already-emitted+chromed base CloneTree (copy + retitle).
# Usage: build-group.sh <base-CloneTree-path> <css-mirror> "slug:Title" "slug:Title" ...
BASE="$1"; CSS="$2"; shift 2
for pair in "$@"; do
  SLUG="${pair%%:*}"; TITLE="${pair#*:}"
  mkdir -p "app/${SLUG}-react/_components" "app/${SLUG}"
  cp "$BASE" "app/${SLUG}-react/_components/CloneTree.tsx"
  node set-banner-title.cjs "app/${SLUG}-react/_components/CloneTree.tsx" "$TITLE" >/dev/null
  cat > "app/${SLUG}/page.tsx" <<TSX
import type { Metadata } from "next";
import { CloneTree } from "../${SLUG}-react/_components/CloneTree";

export const metadata: Metadata = { title: "${TITLE}" };

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/${CSS}/clone-theme.css" />
      <link rel="stylesheet" href="/test-dummy-webs-1/clone-fixes.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;600&family=Roboto:wght@400&display=swap" />
      <div className="clone-root"><CloneTree /></div>
    </>
  );
}
TSX
  echo "  build /$SLUG/ -> $TITLE"
done
