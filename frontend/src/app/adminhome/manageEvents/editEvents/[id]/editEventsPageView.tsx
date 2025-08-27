"use client";
import { MySpacing } from "@/shared/styles";
import { CustomButton } from "@/shared/widgets/customButton";
import { useMutateRequest } from "@/shared/network/hooks/useMutateRequest";
import { gameEventApiManager } from "@/entities/gameEvent/api/gameEventApiManager";
import { EditEventParams } from "@/entities/gameEvent/api/methods/edit/editEvent";
import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import EventEditCreateRows from "@/shared/widgets/eventEditCreateRows/eventEditCreateRows";
import useInputControllers from "../../createEvents/hooks/useInputControllers";
import CustomBackButton from "@/shared/widgets/customBackButton/customBackButton";
import { baseUrl } from "@/shared/network/config/baseUrl";
import { useRouter } from "next/navigation";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/shared/notifications/notificationsController";
import getFormattedDateFromTimestamp from "@/shared/tools/getFormattedDateFromTimestamp";

export default function EditEventsPageView({ event }: { event: GameEvent }) {
  const router = useRouter();
  const [editEventRequest, mutateEditEventRequest] = useMutateRequest<
    boolean,
    EditEventParams
  >(gameEventApiManager.editEvent, {
    onSuccess: () => {
      router.back();
      showSuccessNotification({
        message: "Событие успешно изменено",
      });
    },
    onFail: () => {},
  });

  const createEditControllers = useInputControllers({
    photoUrlDef: baseUrl + `/getPhoto?id=${event.previewPhoto}`,
    startTimeDef: getFormattedDateFromTimestamp(event.startTime),
    endTimeDef: getFormattedDateFromTimestamp(event.endTime),
    nameRuDef: event.name.ru,
    nameEnDef: event.name.en,
    nameKzDef: event.name.kk,
    descriptionRuDef: event.description.ru,
    descriptionEnDef: event.description.en,
    descriptionKzDef: event.description.kk,
    managerDef: event.manager,
    developerDef: event.developer,
    placeRuDef: event.place.ru,
    placeEnDef: event.place.en,
    placeKzDef: event.place.kk,
    disciplineDef: event.discipline,
    prizeDef: event.prize.toString(),
  });

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
          if (!createEditControllers.isParamsReady()) {
            showErrorNotification({
              message: "Ты заполнил не все поля",
            });
            return;
          }
          mutateEditEventRequest({
            id: event.id,
            previewPhoto:
              createEditControllers.photoFile === undefined
                ? event.previewPhoto
                : "",
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
        label={"Сохранить"}
      ></CustomButton>
    </div>
  );
}
