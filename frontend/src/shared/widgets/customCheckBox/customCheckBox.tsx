import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";

export default function CustomCheckBox({
  isActive,
  onPress,
}: {
  isActive: boolean;
  onPress: () => void;
}) {
  const r = 50;
  const rmin = 30;
  return (
    <div
      onClick={onPress}
      style={{
        height: r,
        width: r,
        padding: MySpacing.s10,
        backgroundColor: MyColors.bg3,
        borderRadius: MyBordersRadius.r30,
      }}
    >
      <div
        style={{
          backgroundColor: isActive ? MyColors.green : MyColors.bg2,
          display: "flex",
          height: rmin,
          width: rmin,
          borderRadius: MyBordersRadius.r30,
        }}
      ></div>
    </div>
  );
}
