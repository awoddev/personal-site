import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanity Studio",
  robots: "noindex",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        height: "100vh",
        maxHeight: "100dvh",
        overscrollBehavior: "none",
        WebkitFontSmoothing: "antialiased",
        overflow: "auto",
      }}
    >
      {children}
    </div>
  );
}
