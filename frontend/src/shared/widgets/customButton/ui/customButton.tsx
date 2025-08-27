import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { FormattedMessage } from "react-intl";

export const CustomButton = ({
  onClick,
  label,
  color = MyColors.green,
  outline = false,
}: {
  onClick: () => void;
  label: string;
  color?: string;
  outline?: boolean;
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      style={{
        borderWidth: outline ? 3 : 0,
        borderColor: MyColors.green,
        borderRadius: MyBordersRadius.r10,
        padding: MySpacing.s10,
        backgroundColor: color,
        display: "flex",
        width: "100%",
        justifyContent: "center",
        ...MyTypography.Helvetica16Normal,
      }}
    >
      <h4 style={{ ...MyTypography.Helvetica14Normal, color: MyColors.bg }}>
        {label}
      </h4>
    </div>
  );
};
