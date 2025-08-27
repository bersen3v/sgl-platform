import { useEffect, useLayoutEffect } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main style={{ display: "flex", height: "100%" }}>{children}</main>;
}
