"use client";
import {
  SendProposalRequestAnswer,
  SendProposalRequestProps,
} from "@/entities/user/api/methods/sendProposalRequest";
import { userApiManager } from "@/entities/user/api/userApiManager";
import { desktopMinWidth } from "@/shared/constants/adaptive";
import { useMutateRequest } from "@/shared/network/hooks/useMutateRequest";
import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { CustomButton } from "@/shared/widgets/customButton";
import CustomInput from "@/shared/widgets/customInput/customInput";
import useCustomInputController from "@/shared/widgets/customInput/hooks/customInputController";
import { useState } from "react";
import { useIntl } from "react-intl";
import { useWindowSize } from "react-use";
import ProposalRequestNotSended from "./components/proposalRequestNotSended";
import ProposalRequestSended from "./components/proposalRequestSended";

export default function ComProposalPageView({ eventId }: { eventId: number }) {
  const [isSended, setIsSended] = useState(false);

  const [sendProposalRequest, mutateSendProposalRequest] = useMutateRequest<
    SendProposalRequestAnswer,
    SendProposalRequestProps
  >(userApiManager.sendProposalRequest, {
    onSuccess: (result: SendProposalRequestAnswer) => {
      setIsSended(true);
    },
    onFail: () => {},
  });

  const { width } = useWindowSize();

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        flex: 1,
        padding: MySpacing.s25,
        flexDirection: "column",
        gap: MySpacing.s10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: width > desktopMinWidth ? "40%" : "100%",
          gap: MySpacing.s10,
        }}
      >
        {isSended ? (
          <ProposalRequestSended></ProposalRequestSended>
        ) : (
          <ProposalRequestNotSended
            sendRequest={mutateSendProposalRequest}
            eventId={eventId}
          ></ProposalRequestNotSended>
        )}
      </div>
    </div>
  );
}
