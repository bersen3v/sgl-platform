import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { CustomButton } from "@/shared/widgets/customButton";
import { useRouter } from "next/navigation";
import { useIntl } from "react-intl";

export default function ProposalRequestSended() {
  const router = useRouter();
  const intl = useIntl();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: MySpacing.s10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: MySpacing.s5,
          gap: MySpacing.s5,
        }}
      >
        <h1 style={{ ...MyTypography.Helvetica22Normal }}>
          {intl.formatMessage({ id: "comproposal_success_title" })}
        </h1>

        <h2 style={{ ...MyTypography.Helvetica14Medium }}>
          {intl.formatMessage({ id: "comproposal_success_description" })}
        </h2>
      </div>
      <CustomButton
        onClick={() => {
          router.push("/search");
        }}
        label={intl.formatMessage({
          id: "bookingEvents",
        })}
      ></CustomButton>
    </div>
  );
}
