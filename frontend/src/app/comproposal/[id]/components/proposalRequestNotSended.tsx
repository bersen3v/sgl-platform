import { SendProposalRequestProps } from "@/entities/user/api/methods/sendProposalRequest";
import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { CustomButton } from "@/shared/widgets/customButton";
import CustomInput from "@/shared/widgets/customInput/customInput";
import useCustomInputController from "@/shared/widgets/customInput/hooks/customInputController";
import { useIntl } from "react-intl";

export default function ProposalRequestNotSended({
  eventId,
  sendRequest,
}: {
  sendRequest: (payload: SendProposalRequestProps) => () => void;
  eventId: number;
}) {
  const intl = useIntl();
  const nameController = useCustomInputController();
  const numberController = useCustomInputController();
  const commentController = useCustomInputController();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: MySpacing.s10 }}
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
          {intl.formatMessage({ id: "commercial_proposal" })}
        </h1>

        <h2 style={{ ...MyTypography.Helvetica14Medium }}>
          {intl.formatMessage({ id: "comproposal_description" })}
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: MySpacing.s5,
        }}
      >
        <CustomInput
          placeholder={intl.formatMessage({ id: "name" })}
          controller={nameController}
        ></CustomInput>
        <CustomInput
          placeholder={intl.formatMessage({ id: "phone_number" })}
          controller={numberController}
          type="phone"
        ></CustomInput>
        <CustomInput
          placeholder={intl.formatMessage({ id: "comment" })}
          controller={commentController}
        ></CustomInput>
      </div>
      <CustomButton
        onClick={() => {
          sendRequest({
            name: nameController.value,
            phoneNumber: numberController.value,
            comment: commentController.value,
            eventId: eventId,
          });
        }}
        label={intl.formatMessage({ id: "send" })}
      ></CustomButton>
    </div>
  );
}
