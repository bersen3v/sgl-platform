"use client";

import styled, { keyframes } from "styled-components";
import { MyColors } from "@/shared/styles";

import { useIntl } from "react-intl";
import GlassHeader from "../home/components/glassHeader";
import CustomBlackButton from "../home/components/customBlackButton";
import CustomInput from "@/shared/widgets/customInput/customInput";
import useCustomInputController from "@/shared/widgets/customInput/hooks/customInputController";
import ContactusHeader from "./components/contactusHeader";
import { desktopMinWidth } from "@/shared/constants/adaptive";
import { useRouter } from "next/navigation";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/shared/notifications/notificationsController";
import GradientBubbles from "../home/components/bubbles";

const HomePageContainer = styled.div`
  display: flex;
  background-color: ${MyColors.dark1};
  flex-direction: column;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

const InputBlocker = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 80%;

  z-index: 10;

  @media (min-width: ${desktopMinWidth}px) {
    width: 50%;
    /* max-width: 50%; */
  }
`;

export default function ContactUs() {
  const intl = useIntl();
  const nameController = useCustomInputController();
  const companyController = useCustomInputController();
  const phoneController = useCustomInputController();
  const router = useRouter();

  const token = "8214869821:AAHCocacNS6caZDQ4TNiFmyM6nMwvrcfcpo";
  const telegramChatId = "-4817500417";

  function sendToTelegram(messageText: string) {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const data = {
      chat_id: telegramChatId,
      text: messageText,
      parse_mode: "HTML",
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Сообщение отправлено:", data);
      })
      .catch((error) => {
        console.error("Ошибка отправки:", error);
      });
  }

  return (
    <HomePageContainer>
      <GlassHeader></GlassHeader>
      <GradientBubbles></GradientBubbles>
      <InputBlocker>
        <ContactusHeader></ContactusHeader>
        <CustomInput
          bgColor={MyColors.dark3}
          placeholder="Имя"
          controller={nameController}
        ></CustomInput>
        <CustomInput
          bgColor={MyColors.dark3}
          placeholder="Компания"
          controller={companyController}
        ></CustomInput>
        <CustomInput
          bgColor={MyColors.dark3}
          placeholder="Почта"
          controller={phoneController}
        ></CustomInput>
      </InputBlocker>
      <CustomBlackButton
        placeholder={"поехали!"}
        onClick={() => {
          if (phoneController.value.trim() === "") {
            showErrorNotification({
              message: "Необходимо обязательно указать почту",
            });
            return;
          }
          sendToTelegram(
            `имя: ${nameController.value}\nкомпания: ${companyController.value}\nпочта: ${phoneController.value}`
          );
          router.push("/");
          showSuccessNotification({
            message: "Готово! Скоро с вами свяжется менеджер",
          });
        }}
      ></CustomBlackButton>
    </HomePageContainer>
  );
}
