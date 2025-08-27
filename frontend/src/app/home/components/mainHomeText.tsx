import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { useIntl } from "react-intl";

export default function MainHomeText({
  isMobile = false,
  messageId,
}: {
  isMobile?: boolean;
  messageId: string;
}) {
  const intl = useIntl();
  return (
    <div style={{ padding: MySpacing.s5 }}>
      <h1
        style={{
          ...MyTypography.Helvetica22Normal,
          width: isMobile ? "100%" : "60%",
        }}
      >
        {intl.formatMessage({ id: messageId })}
      </h1>
    </div>
  );
}
