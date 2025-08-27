import { MySpacing } from "@/shared/styles";
import { CustomButton } from "../customButton";
import { useIntl } from "react-intl";
import { useRouter } from "next/navigation";

export default function CustomBackButton() {
  const intl = useIntl();
  const router = useRouter();
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          flexGrow: 0,
          // paddingLeft: MySpacing.s5,
          // paddingRight: MySpacing.s5,
        }}
      >
        <CustomButton
          onClick={() => {
            router.back();
          }}
          label={intl.formatMessage({ id: "back" })}
        ></CustomButton>
      </div>

      <div style={{ flexGrow: 1 }}></div>
    </div>
  );
}
