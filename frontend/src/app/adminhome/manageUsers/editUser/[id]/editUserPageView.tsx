"use client";
import { MySpacing } from "@/shared/styles";
import CustomBackButton from "@/shared/widgets/customBackButton/customBackButton";

import UserCreateFields from "@/shared/widgets/userCreateFields/userCreateFields";
import { CustomButton } from "@/shared/widgets/customButton";
import useUserCustomInputs from "../../createUser/hook/useUserCustomInputs";
import { User } from "@/entities/user/model/user";
import { baseUrl } from "@/shared/network/config/baseUrl";
import { userApiManager } from "@/entities/user/api/userApiManager";
import { useMutateRequest } from "@/shared/network/hooks/useMutateRequest";
import { UpdateUserParams } from "@/entities/user/api/methods/updateUser";
import { showSuccessNotification } from "@/shared/notifications/notificationsController";
import { useRouter } from "next/navigation";

// export type User = {
//   id: string;
//   previewPhoto: string;
//   first_name: string;
//   last_name: string;
//   company: string;
//   mail: string;
//   phone: string;
// };

export default function EditUserPageView({ user }: { user: User }) {
  const router = useRouter();
  const [editEventRequest, mutateEditEventRequest] = useMutateRequest<
    boolean,
    UpdateUserParams
  >(userApiManager.updateUser, {
    onSuccess: () => {
      router.back();
      showSuccessNotification({
        message: "Юзер успешно изменен",
      });
    },
    onFail: () => {},
  });

  const userFieldsController = useUserCustomInputs({
    photoUrlDef: baseUrl + `/getPhoto?id=${user.previewPhoto}`,
    firstNameDef: user.firstName,
    lastNameDef: user.lastName,
    companyDef: user.company,
    mailDef: user.mail,
    phoneDef: user.phone,
    loginDef: user.login,
    passwordDef: user.password,
    isAdminDef: user.isAdmin === 1 ? true : false,
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
          mutateEditEventRequest({
            id: Number(user.id),
            previewPhoto:
              userFieldsController.photoFile === undefined
                ? user.previewPhoto
                : "",
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
        label={"Сохранить"}
      ></CustomButton>
    </div>
  );
}
