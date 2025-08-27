import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { CustomButton } from "../customButton";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";

export default function DescriptionButton({
  label,
  btnLabel,
  description,
  onClick,
}: {
  label: string;
  btnLabel: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: MyColors.bg2,
        flexDirection: "column",
        padding: MySpacing.s15,
        borderRadius: MyBordersRadius.r20,
        gap: MySpacing.s15,
      }}
    >
      <h3 style={{ ...MyTypography.Helvetica19Medium }}>{label}</h3>
      <h3 style={{ ...MyTypography.Helvetica14Medium }}>{description}</h3>
      <CustomButton onClick={onClick} label={btnLabel}></CustomButton>
    </div>
  );
}
