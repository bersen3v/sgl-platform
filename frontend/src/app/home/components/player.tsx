import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";

export default function Player({
  name,
  role,
  url,
}: {
  name: string;
  role: string;
  url: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: MyColors.bg2,
        padding: MySpacing.s10,
        borderRadius: MyBordersRadius.r20,
        gap: MySpacing.s10,
      }}
    >
      <img
        style={{
          width: "100%",
          maxHeight: 300,
          borderRadius: MyBordersRadius.r15,
          objectFit: "cover",
        }}
        src={url}
        alt={"фото эвента"}
      />
      <div
        style={{
          padding: MySpacing.s5,
          display: "flex",
          flexDirection: "column",
          gap: MySpacing.s5,
        }}
      >
        <h1 style={{ ...MyTypography.Helvetica19Medium }}>{name}</h1>
        <h1 style={{ ...MyTypography.Helvetica14Normal }}>{role}</h1>
      </div>
    </div>
  );
}
