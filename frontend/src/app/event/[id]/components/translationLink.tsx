import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import timestamp2dm from "@/shared/tools/timestamp2dm";
import timestamp2year from "@/shared/tools/timestamp2year";
import { CustomButton } from "@/shared/widgets/customButton";
import { useIntl } from "react-intl";

export default function TranslationLink({ event }: { event: GameEvent }) {
  const intl = useIntl();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: MySpacing.s10,
        backgroundColor: MyColors.bg2,
        borderRadius: MyBordersRadius.r20,
        gap: MySpacing.s10,
        paddingTop: MySpacing.s15,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: MySpacing.s5,
        }}
      >
        <h4 style={{ ...MyTypography.Helvetica19Medium }}>
          {intl.formatMessage({ id: "link_to_the_broadcast" })}
        </h4>
      </div>
      <CustomButton
        onClick={() => {}}
        label={intl.formatMessage({ id: "copy" })}
      ></CustomButton>
    </div>
  );
}
