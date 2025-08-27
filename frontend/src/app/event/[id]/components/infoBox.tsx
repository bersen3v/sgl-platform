import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";

export default function InfoBox({
  header,
  text,
}: {
  header: string;
  text: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: MyColors.bg2,
        width: "100%",
        padding: MySpacing.s20,
        borderRadius: MyBordersRadius.r20,
        gap: MySpacing.s10,
      }}
    >
      <h3 style={{ ...MyTypography.Helvetica22Normal }}>{header}</h3>
      <p style={{ ...MyTypography.Helvetica16Normal, lineHeight: 1.2 }}>
        {text}
      </p>
    </div>
  );
}
