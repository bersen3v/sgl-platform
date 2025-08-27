import useCustomInputController from "@/shared/widgets/customInput/hooks/customInputController";
import { useEffect, useState } from "react";

export default function useInputControllers({
  photoUrlDef = "",
  startTimeDef = "",
  endTimeDef = "",
  nameRuDef = "",
  nameEnDef = "",
  nameKzDef = "",
  descriptionRuDef = "",
  descriptionEnDef = "",
  descriptionKzDef = "",
  managerDef = "",
  developerDef = "",
  placeRuDef = "",
  placeEnDef = "",
  placeKzDef = "",
  disciplineDef = "",
  prizeDef = "",
}: {
  photoUrlDef?: string;
  startTimeDef?: string;
  endTimeDef?: string;
  nameRuDef?: string;
  nameEnDef?: string;
  nameKzDef?: string;
  descriptionRuDef?: string;
  descriptionEnDef?: string;
  descriptionKzDef?: string;
  managerDef?: string;
  developerDef?: string;
  placeRuDef?: string;
  placeEnDef?: string;
  placeKzDef?: string;
  disciplineDef?: string;
  prizeDef?: string;
}) {
  const [photoFile, setPhotoFile] = useState<File | undefined>(undefined);
  const [photoUrl, setPhotoUrl] = useState(photoUrlDef);

  const nameControllerRu = useCustomInputController(nameRuDef);
  const nameControllerEn = useCustomInputController(nameEnDef);
  const nameControllerKz = useCustomInputController(nameKzDef);

  const descriptionControllerRu = useCustomInputController(descriptionRuDef);
  const descriptionControllerEn = useCustomInputController(descriptionEnDef);
  const descriptionControllerKz = useCustomInputController(descriptionKzDef);

  const managerController = useCustomInputController(managerDef);
  const developerController = useCustomInputController(developerDef);

  const placeControllerRu = useCustomInputController(placeRuDef);
  const placeControllerEn = useCustomInputController(placeEnDef);
  const placeControllerKz = useCustomInputController(placeKzDef);

  const disciplineController = useCustomInputController(disciplineDef);
  const prizeController = useCustomInputController(prizeDef);

  const startDateInputController = useCustomInputController(startTimeDef);
  const endtDateInputController = useCustomInputController(endTimeDef);

  const isParamsReady = () =>
    nameControllerRu.value !== "" &&
    nameControllerEn.value !== "" &&
    nameControllerKz.value !== "" &&
    descriptionControllerRu.value !== "" &&
    descriptionControllerEn.value !== "" &&
    descriptionControllerKz.value !== "" &&
    managerController.value !== "" &&
    developerController.value !== "" &&
    placeControllerRu.value !== "" &&
    placeControllerEn.value !== "" &&
    placeControllerEn.value !== "" &&
    disciplineController.value !== "" &&
    prizeController.value !== "" &&
    startDateInputController.value !== "" &&
    endtDateInputController.value !== "";

  const isPhotoReady = () => photoFile !== undefined;

  return {
    isPhotoReady,
    photoUrl,
    photoFile,
    setPhotoFile,
    setPhotoUrl,
    nameControllerRu,
    nameControllerEn,
    nameControllerKz,
    descriptionControllerEn,
    descriptionControllerRu,
    descriptionControllerKz,
    managerController,
    developerController,
    placeControllerRu,
    placeControllerEn,
    placeControllerKz,
    disciplineController,
    prizeController,
    startDateInputController,
    endtDateInputController,
    isParamsReady,
  };
}
