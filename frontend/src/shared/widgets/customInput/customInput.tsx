import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { HTMLInputTypeAttribute } from "react";
import useCustomInputController from "./hooks/customInputController";

export default function CustomInput({
  bgColor = MyColors.bg2,
  placeholder = "",
  type = "text",
  controller,
}: {
  placeholder?: string;
  bgColor?: string;
  type?: HTMLInputTypeAttribute | undefined;
  controller: ReturnType<typeof useCustomInputController>;
}) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        backgroundColor: bgColor,
        borderRadius: MyBordersRadius.r15,
        padding: MySpacing.s15,
        alignItems: "center",
        paddingLeft: MySpacing.s15,
        gap: MySpacing.s10,
      }}
    >
      <input
        type={type}
        placeholder={placeholder}
        color={MyColors.white}
        value={controller.value}
        onChange={controller.handleInputChange}
        style={{
          ...MyTypography.Helvetica14Medium,
          caretColor: MyColors.white,
          color: MyColors.green,
          display: "flex",
          height: "100%",
          width: "100%",
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
        }}
      ></input>
    </div>
  );
}
