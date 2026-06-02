#!/bin/bash
set -e
MIRROR="$1"; SLUG="$2"; TITLE="$3"
node build-clone-css.cjs "$MIRROR" clone-root 2>&1 | grep -vE "^\s*!\s*missing" || true
node /tmp/emit-patched.cjs --url "http://localhost:3210/$MIRROR/index.html" --public "/$MIRROR/" --scope clone-root --out "app/${SLUG}-react" --name "${SLUG}-inline" 2>&1 | grep -E "emit:" || true
node apply-kkcp-chrome.cjs "app/${SLUG}-react/_components/CloneTree.tsx"
node fix-logo.cjs "app/${SLUG}-react/_components/CloneTree.tsx"
node set-banner-title.cjs "app/${SLUG}-react/_components/CloneTree.tsx" "$TITLE"
mkdir -p "app/$SLUG"
cat > "app/$SLUG/page.tsx" <<TSX
import type { Metadata } from "next";
import { CloneTree } from "../${SLUG}-react/_components/CloneTree";

export const metadata: Metadata = { title: "${TITLE}" };

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="/${MIRROR}/clone-theme.css" />
      <link rel="stylesheet" href="/test-dummy-webs-1/clone-fixes.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;600&family=Roboto:wght@400&display=swap" />
      <div className="clone-root"><CloneTree /></div>
    </>
  );
}
TSX
echo "✓ /$SLUG/ <- univet $MIRROR (title: $TITLE)"
