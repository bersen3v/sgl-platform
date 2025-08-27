"use client";
import { MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import CustomBackButton from "@/shared/widgets/customBackButton/customBackButton";
import CustomInput from "@/shared/widgets/customInput/customInput";
import useCustomInputController from "@/shared/widgets/customInput/hooks/customInputController";
import useUserCustomInputs from "./hook/useUserCustomInputs";
import UserCreateFields from "@/shared/widgets/userCreateFields/userCreateFields";
import { CustomButton } from "@/shared/widgets/customButton";
import { useMutateRequest } from "@/shared/network/hooks/useMutateRequest";
import { userApiManager } from "@/entities/user/api/userApiManager";
import { useRouter } from "next/navigation";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/shared/notifications/notificationsController";

// export type User = {
//   id: string;
//   previewPhoto: string;
//   first_name: string;
//   last_name: string;
//   company: string;
//   mail: string;
//   phone: string;
// };

export default function CreateUserPage() {
  const router = useRouter();
  const [createUserRequest, mutateCreateUserRequest] = useMutateRequest(
    userApiManager.createUser,
    {
      onSuccess: (responce: boolean) => {
        router.back();
        showSuccessNotification({
          message: "Юзер успешно создан",
        });
      },
      onFail: () => {},
    }
  );

  const userFieldsController = useUserCustomInputs({
    photoUrlDef:
      "https://sun9-18.userapi.com/impg/DxTi74PxFH7VOAD5sA-LIn9OeLBt25-BUmq4IQ/kKtjOzHTWJY.jpg?size=1125x1125&quality=95&sign=dcaf83a8acb1f38bf36331be11cd4496&type=album",
    firstNameDef: "",
    lastNameDef: "",
    companyDef: "",
    mailDef: "",
    phoneDef: "",
    loginDef: "",
    passwordDef: "",
    isAdminDef: false,
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
      <UserCreateFields
        userFieldsController={userFieldsController}
      ></UserCreateFields>
      <CustomButton
        onClick={() => {
          if (
            !userFieldsController.isInputsReady() ||
            !userFieldsController.isPhotoReady()
          ) {
            showErrorNotification({
              message: "Ты заполнил не все поля",
            });
            return;
          }
          mutateCreateUserRequest({
            photoUrlFile: userFieldsController.photoFile,
            firstName: userFieldsController.firstNameController.value,
            lastName: userFieldsController.lastNameController.value,
            company: userFieldsController.companyController.value,
            mail: userFieldsController.mailController.value,
            phone: userFieldsController.phoneController.value,
            isAdmin: userFieldsController.isAdmin ? 1 : 0,
            login: userFieldsController.loginController.value,
            password: userFieldsController.passwordController.value,
          });
        }}
        label={"Создать"}
      ></CustomButton>
    </div>
  );
}
