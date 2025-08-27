import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { useIntl } from "react-intl";
import Player from "./player";

export default function Partners({ isMobile = false }: { isMobile?: boolean }) {
  const intl = useIntl();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: MySpacing.s10 }}
    >
      <h1 style={{ ...MyTypography.Helvetica22Normal, padding: MySpacing.s10 }}>
        {intl.formatMessage({ id: "partners" })}
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: MySpacing.s15,
          maxWidth: !isMobile ? "50%" : "100%",
        }}
      >
        <Player
          name={intl.formatMessage({ id: "astana_hub" })}
          role={intl.formatMessage({ id: "acselerator" })}
          url={"/icons/ah_logo_50.png"}
        ></Player>
      </div>
    </div>
  );
}
