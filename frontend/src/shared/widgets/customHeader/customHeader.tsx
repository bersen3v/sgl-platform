import { MySpacing } from "@/shared/styles";

import ProfileButton from "./components/profileButton";
import LanguageSelect from "./components/languageSelect";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { useLocale } from "@/shared/context/localeContext";

const blockedPages = ["/"];

export default function CustomHeader() {
  const router = useRouter();

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  if (blockedPages.includes(path)) {
    return null;
  }
  // console.log(path);
  return (
    <div
      style={{
        display: "flex",
        flexGrow: 0,
        flexDirection: "row",
        padding: MySpacing.s25,
        paddingBottom: MySpacing.s10,
        paddingTop: MySpacing.s10,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img
        onClick={() => {
          router.push("/");
        }}
        src="/icons/logo.png"
        style={{
          height: 30,
          objectFit: "cover",
        }}
      ></img>

      <div style={{ display: "flex", gap: MySpacing.s10, height: "100%" }}>
        <LanguageSelect></LanguageSelect>
        <ProfileButton></ProfileButton>
      </div>
    </div>
  );
}
