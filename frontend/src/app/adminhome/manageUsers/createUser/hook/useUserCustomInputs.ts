import useCustomInputController from "@/shared/widgets/customInput/hooks/customInputController";
import { useState } from "react";

export default function useUserCustomInputs({
  photoUrlDef,
  firstNameDef,
  lastNameDef,
  companyDef,
  mailDef,
  phoneDef,
  loginDef,
  passwordDef,
  isAdminDef,
}: {
  photoUrlDef: string;
  firstNameDef: string;
  lastNameDef: string;
  companyDef: string;
  mailDef: string;
  phoneDef: string;
  loginDef: string;
  passwordDef: string;
  isAdminDef: boolean;
}) {
  const [photoFile, setPhotoFile] = useState<File | undefined>(undefined);
  const [photoUrl, setPhotoUrl] = useState(photoUrlDef);
  const [isAdmin, setIsAdmin] = useState(isAdminDef);

  const firstNameController = useCustomInputController(firstNameDef);
  const lastNameController = useCustomInputController(lastNameDef);
  const companyController = useCustomInputController(companyDef);
  const mailController = useCustomInputController(mailDef);
  const phoneController = useCustomInputController(phoneDef);
  const loginController = useCustomInputController(loginDef);
  const passwordController = useCustomInputController(passwordDef);

  const isInputsReady = () =>
    firstNameController.value !== "" &&
    lastNameController.value !== "" &&
    companyController.value !== "" &&
    mailController.value !== "" &&
    phoneController.value !== "" &&
    loginController.value !== "" &&
    passwordController.value !== "";

  const isPhotoReady = () => photoFile !== undefined;

  return {
    photoUrl,
    setPhotoFile,
    setPhotoUrl,
    firstNameController,
    lastNameController,
    companyController,
    loginController,
    passwordController,
    mailController,
    phoneController,
    photoFile,
    isAdmin,
    setIsAdmin,
    isPhotoReady,
    isInputsReady,
  };
}
