"use client";
import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { CustomButton } from "@/shared/widgets/customButton";
import { useMutateRequest } from "@/shared/network/hooks/useMutateRequest";
import { gameEventApiManager } from "@/entities/gameEvent/api/gameEventApiManager";
import { CreateEventParams } from "@/entities/gameEvent/api/methods/create/createEvent";

import EventEditCreateRows from "@/shared/widgets/eventEditCreateRows/eventEditCreateRows";
import useInputControllers from "./hooks/useInputControllers";
import CustomBackButton from "@/shared/widgets/customBackButton/customBackButton";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/shared/notifications/notificationsController";
import { useRouter } from "next/navigation";

export default function CreateEventsPage() {
  const router = useRouter();
  const [createEventRequest, mutateCreateEventRequest] = useMutateRequest<
    boolean,
    CreateEventParams
  >(gameEventApiManager.createEvent, {
    onSuccess: () => {
      router.back();
      showSuccessNotification({
        message: "Событие успешно добавлено",
      });
    },
    onFail: () => {},
  });

  const createEditControllers = useInputControllers({
    photoUrlDef:
      "https://sun9-18.userapi.com/impg/DxTi74PxFH7VOAD5sA-LIn9OeLBt25-BUmq4IQ/kKtjOzHTWJY.jpg?size=1125x1125&quality=95&sign=dcaf83a8acb1f38bf36331be11cd4496&type=album",
    startTimeDef: "",
    endTimeDef: "",
    nameRuDef: "",
    nameEnDef: "",
    nameKzDef: "",
    descriptionRuDef: "",
    descriptionEnDef: "",
    descriptionKzDef: "",
    managerDef: "",
    developerDef: "",
    placeRuDef: "",
    placeEnDef: "",
    placeKzDef: "",
    disciplineDef: "",
    prizeDef: "",
  });

  const Title = ({ title }: { title: string }) => {
    return (
      <h2 style={{ ...MyTypography.Helvetica19Medium, padding: MySpacing.s10 }}>
        {title}
      </h2>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        padding: MySpacing.s25,
        paddingTop: 0,
        flexDirection: "column",
        gap: MySpacing.s25,
        width: "50%",
      }}
    >
      <CustomBackButton></CustomBackButton>

      <EventEditCreateRows
        createEditControllers={createEditControllers}
      ></EventEditCreateRows>

      <CustomButton
        onClick={() => {
          if (
            !createEditControllers.isParamsReady() ||
            !createEditControllers.isPhotoReady()
          ) {
            showErrorNotification({
              message: "Ты заполнил не все поля",
            });
            return;
          }
          mutateCreateEventRequest({
            photoUrlFile: createEditControllers.photoFile,
            startTime: new Date(
              createEditControllers.startDateInputController.value
            ).getTime(),
            endTime: new Date(
              createEditControllers.endtDateInputController.value
            ).getTime(),
            nameRu: createEditControllers.nameControllerRu.value,
            nameEn: createEditControllers.nameControllerEn.value,
            nameKz: createEditControllers.nameControllerKz.value,
            descriptionRu: createEditControllers.descriptionControllerRu.value,
            descriptionEn: createEditControllers.descriptionControllerEn.value,
            descriptionKz: createEditControllers.descriptionControllerKz.value,
            manager: createEditControllers.managerController.value,
            developer: createEditControllers.developerController.value,
            placeRu: createEditControllers.placeControllerRu.value,
            placeEn: createEditControllers.placeControllerEn.value,
            placeKz: createEditControllers.placeControllerKz.value,
            discipline: createEditControllers.disciplineController.value,
            prize: Number(createEditControllers.prizeController.value),
          });
        }}
        label={"Создать"}
      ></CustomButton>
    </div>
  );
}
