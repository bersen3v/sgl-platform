"use client";
import {
  AuthUserAnswer,
  AuthUserProps,
} from "@/entities/user/api/methods/authUser";
import { userApiManager } from "@/entities/user/api/userApiManager";
import { desktopMinWidth } from "@/shared/constants/adaptive";
import { useMutateRequest } from "@/shared/network/hooks/useMutateRequest";
import { showErrorNotification } from "@/shared/notifications/notificationsController";
import { MySpacing } from "@/shared/styles";
import { CustomButton } from "@/shared/widgets/customButton";
import CustomInput from "@/shared/widgets/customInput/customInput";
import useCustomInputController from "@/shared/widgets/customInput/hooks/customInputController";
import { useRouter } from "next/navigation";
import { useIntl } from "react-intl";
import { useWindowSize } from "react-use";

export default function AuthPage() {
  const { width } = useWindowSize();
  const router = useRouter();
  const intl = useIntl();

  const loginController = useCustomInputController();
  const passwordController = useCustomInputController();

  const [entryRequest, mutateEntryRequest] = useMutateRequest<
    AuthUserAnswer,
    AuthUserProps
  >(userApiManager.authUser, {
    onSuccess: (id: AuthUserAnswer) => {
      if (id) {
        localStorage.setItem("userKey", id);
        router.push(`/user/${id}`);
        return;
      }
      showErrorNotification({ message: "Такого пользователя не существует" });
    },
    onFail: () => {
      showErrorNotification({ message: "Такого пользователя не существует" });
    },
  });

  const handleEntryClick = () => {
    if (loginController.value !== "" && passwordController.value !== "") {
      mutateEntryRequest({
        login: loginController.value,
        password: passwordController.value,
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        padding: MySpacing.s25,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: MySpacing.s10,
          flexDirection: "column",
          margin: "auto",

          width: width > desktopMinWidth ? "40%" : "100%",
        }}
      >
        <CustomInput
          placeholder={intl.formatMessage({ id: "login" })}
          controller={loginController}
        ></CustomInput>
        <CustomInput
          placeholder={intl.formatMessage({ id: "password" })}
          type="password"
          controller={passwordController}
        ></CustomInput>
        <CustomButton
          onClick={handleEntryClick}
          label={intl.formatMessage({ id: "entry" })}
        ></CustomButton>
      </div>
    </div>
  );
}
