import { MySpacing } from "@/shared/styles";
import Player from "./player";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { useIntl } from "react-intl";

export default function Players({ isMobile = false }: { isMobile?: boolean }) {
  const intl = useIntl();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: MySpacing.s10 }}
    >
      <h1 style={{ ...MyTypography.Helvetica22Normal, padding: MySpacing.s10 }}>
        {intl.formatMessage({ id: "team" })}
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: MySpacing.s15,
        }}
      >
        <Player
          name={intl.formatMessage({ id: "dmitry_pislevich" })}
          // role={intl.formatMessage({ id: "ceo" })}
          role="Founder"
          url={"/icons/dmitri_pislevich.jpg"}
        ></Player>
        <Player
          name={intl.formatMessage({ id: "magzhan_myazov" })}
          role={intl.formatMessage({ id: "ceo" })}
          url={"/icons/magzhan.jpg"}
        ></Player>
      </div>
    </div>
  );
}
