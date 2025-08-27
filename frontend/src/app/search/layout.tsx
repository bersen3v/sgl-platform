export default function SearchPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main style={{ display: "flex", height: "100%" }}>{children}</main>;
}
